<template>
    <div class="bg-white flex flex-col gap-x-3 rounded-md shadow-sm">
        <div class="p-3">
            <a :href="item.url" target="_blank"
                class="hover:text-black font-bold text-l mb-1 text-gray-600 text-center">{{
                item.title }}</a>
            <div class="flex items-center justify-center mt-2 gap-x-1">
                <button class="like-btn group" :class="{
                'like-item-active': alreadyLiked
            }" @click="likeItem">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current group-hover:text-white" height="24"
                        viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" />
                    </svg>
                </button>
                <button class="bookmark-btn group" :class="{
                    'bookmark-item-active':alreadyBookmarked
                }" @click="bookmarkItem">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current group-hover:text-white"
                        enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="24" height="24">
                        <rect fill="none" />
                        <path
                            d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z" />
                    </svg>
                </button>
                <div class="relative group">
                    <button class="details-btn !-z-[1] group">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current group-hover:text-gray-700"
                            height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z" />
                        </svg>
                        <p class="details-container">{{ item.description }}</p>
                    </button>
                </div>
            </div>
            <div class="text-xs text-gray-400 mt-2 flex justify-between">
                <a href="#" class="hover:text-black"> {{ userName }} </a>
                <span>{{ createdRelativeTime(item.createdAt) }}</span>
            </div>
        </div>
        <div class="bg-red-200 p-1 text-red-900 text-center text-sm">{{ categoryName }}</div>
    </div>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
    props: {
        item: {
            type: Object,
            required: true,
            default: () => { }
        }
    },
    computed: {
        categoryName() {
            return this.item.category.name || "-";
        },
        userName() {
            return this.item.user.fullname || "-";
        },
        alreadyLiked() {
            return Boolean(this.likedItem);
        },
        alreadyBookmarked() {
            return Boolean(this.bookmarkedItem);
        },
        likedItem(){
            return this._userLikes?.find(userLike=>userLike.userId===this._getCurrentUser.id && userLike.bookmarkId==this.item.id);
        },
        bookmarkedItem(){
            return this._userBookmarks?.find(userBookmark=>userBookmark.userId===this._getCurrentUser.id && userBookmark.bookmarkId===this.item.id);
        },
        ...mapGetters(["_getCurrentUser", "_userLikes", "_userBookmarks"])
    },
    methods: {
        createdRelativeTime(date) {
            moment(date).fromNow()
        },
        likeItem() {
            this.$appAxios({
                url: this.alreadyLiked ? `/user_likes/${this.likedItem.id}` : "/user_likes",
                method: this.alreadyLiked ? "DELETE" : "POST",
                data: {
                    userId: this._getCurrentUser.id,
                    bookmarkId: this.item.id
                }
            }).then(user_likes_response=>{
                let likes=[...this._userLikes];
                if(this.alreadyLiked) likes=likes.filter(like=>like.id!==this.likedItem.id);
                else likes=[...likes, user_likes_response.data];

                this.$store.commit("setLikes", likes);
            })
        },
        bookmarkItem() {
            this.$appAxios({
                url: this.alreadyBookmarked ? `/user_bookmarks/${this.bookmarkedItem.id}` : "/user_bookmarks",
                method: this.alreadyBookmarked ? "DELETE" : "POST",
                data: {
                    userId: this._getCurrentUser.id,
                    bookmarkId: this.item.id
                }
            }).then(user_bookmark_response=>{
                let bookmarks=[...this._userBookmarks];
                if(this.alreadyBookmarked) bookmarks=bookmarks.filter(bookmark=>bookmark.id!==this.bookmarkedItem.id);
                else bookmarks=[...bookmarks, user_bookmark_response.data];

                this.$store.commit("setBookmarks", bookmarks);
            })
        }
    }
}
</script>
import { useStore } from "vuex";
import { computed, inject } from "vue";

export default function (item) {

    const store = useStore();
    const appAxios = inject("appAxios");
    // Computed
    const categoryName = computed(() => {
        return item.category.name || "-";
    });
    const userName = computed(() => {
        return item.user.fullname || "-";
    });
    const alreadyLiked = computed(() => {
        return Boolean(likedItem);
    });
    const alreadyBookmarked = computed(() => {
        return Boolean(bookmarkedItem);
    });
    const likedItem = computed(() => {
        return _userLikes.value?.find(
            (userLike) =>
                userLike.userId === _getCurrentUser.value.id &&
                userLike.bookmarkId === item.id
        );
    });
    const bookmarkedItem = computed(() => {
        return _userBookmarks.value?.find(
            (userBookmark) =>
                userBookmark.userId === _getCurrentUser.value.id &&
                userBookmark.bookmarkId === item.id
        );
    });
    const _getCurrentUser = computed(() => store.getters._getCurrentUser);
    const _userLikes = computed(() => store.getters._userLikes);
    const _userBookmarks = computed(() => store.getters._userBookmarks);

    // Methods
    const likeItem = () => {
        appAxios({
            url: alreadyLiked ? `/user_likes/${likedItem.id}` : "/user_likes",
            method: alreadyLiked ? "DELETE" : "POST",
            data: {
                userId: _getCurrentUser.value.id,
                bookmarkId: item.id,
            },
        }).then((user_likes_response) => {
            let likes = [..._userLikes.value];
            if (alreadyLiked) likes = likes.filter((like) => like.id !== likedItem.id);
            else likes = [...likes, user_likes_response.data];

            store.commit("setLikes", likes);
        });
    };
    const bookmarkItem = () => {
        appAxios({
            url: alreadyBookmarked
                ? `/user_bookmarks/${bookmarkedItem.id}`
                : "/user_bookmarks",
            method: alreadyBookmarked ? "DELETE" : "POST",
            data: {
                userId: _getCurrentUser.value.id,
                bookmarkId: item.id,
            },
        }).then((user_bookmark_response) => {
            let bookmarks = [..._userBookmarks.value];
            if (alreadyBookmarked)
                bookmarks = bookmarks.filter(
                    (bookmark) => bookmark.id !== bookmarkedItem.id
                );
            else bookmarks = [...bookmarks, user_bookmark_response.data];

            store.commit("setBookmarks", bookmarks);
        });
    };
    return {
        categoryName,
        userName,
        alreadyLiked,
        alreadyBookmarked,
        likedItem,
        bookmarkedItem,
        likeItem,
        bookmarkItem
    }
}
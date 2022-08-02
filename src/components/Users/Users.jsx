import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/default-photo.jpeg";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let currentPage = props.currentPage;
  let currentPageF = currentPage - 5 < 0 ? 0 : currentPage - 5;
  let currentPageL = currentPage + 5;
  let slicedPages = pages.slice(currentPageF, currentPageL);

  return (
    <div className={s.usersBlock}>
      <div className={s.pages}>
        {slicedPages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {props.onPageChanged(p);}}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div className={s.users}>
        {props.users.map((u) => (
          <div className={s.user} key={u.id}>
            <div>
              <div>
                <img
                  className={s.userPhoto}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unFollow(u.id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
            </div>
            <div>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;

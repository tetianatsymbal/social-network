import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div>
        <img className={s.wallpaper} src="https://mcdn.wallpapersafari.com/medium/75/48/oGzMlE.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5cb17c87-fcad-447c-8c5e-0b814b66e8e1/d53nmo2-6d3dd683-5de3-4681-9fef-a8bd464879e2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjYjE3Yzg3LWZjYWQtNDQ3Yy04YzVlLTBiODE0YjY2ZThlMVwvZDUzbm1vMi02ZDNkZDY4My01ZGUzLTQ2ODEtOWZlZi1hOGJkNDY0ODc5ZTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n5GbcRbVmMk1-3vpgEVlMq2EXWoABv83TJHL4OMAics"/>
        <div className={s.userName}>Sarah Puppy</div>
      </div>
    </div>
  );
};

export default ProfileInfo;

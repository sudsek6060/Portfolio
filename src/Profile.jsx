import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex max-w-[75%] max-h-[500px] mx-auto text-yellow-50">
        <div className="flex flex-col gap-3 mt-[220px]">
          <h1>Hello I`m</h1>
          <span className="text-2xl">Sudhansu Sekhar Mahankuda</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil a
            quidem aut amet porro praesentium mollitia quisquam in molestias
            obcaecati autem iusto cum reprehenderit officia explicabo assumenda,
            ullam doloribus. Dolorem impedit id perspiciatis odit nisi!
          </p>
        </div>
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2h5Z2hvdmhoMDJ0czloYWhreDBmNG12NGFiaW9yM2JnN3RtMTUwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/zhYSVCirREeIZtONCI/giphy.gif"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Profile;

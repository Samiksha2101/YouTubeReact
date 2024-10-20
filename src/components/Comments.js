import React from "react";
const comments = [
  {
    name: "Samiksha",
    text: "This is my comment",
    replies: [],
  },
  {
    name: "Samiksha",
    text: "This is my 2nd comment",
    replies: [
      {
        name: "Samiksha",
        text: "This is my comment",
        replies: [
          {
            name: "Samiksha",
            text: "This is my comment",
            replies: [
              {
                name: "Samiksha",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                replies: [
                  {
                    name: "Samiksha",
                    text: "This is my comment",
                    replies: [
                      {
                        name: "Samiksha",
                        text: "This is my comment",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Samiksha",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 😊",
                replies: [],
              },
              {
                name: "Samiksha",
                text: "This is my comment",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: "Samiksha",
    text: "This is my 3rd comment",
    replies: [
      {
        name: "Samiksha",
        text: "This is my comment",
        replies: [
          {
            name: "Samiksha",
            text: "This is my comment",
            replies: [],
          },
        ],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-md p-1 m-2 ml-0">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png"
      ></img>
      <div className="px-2">
        <p className="font-bold"> {name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment data={comment}></Comment>
      <div className="ml-7  border-l">
        <CommentList comments={comment.replies}></CommentList>
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="ml-4 w-[840px]">
      <p className="font-bold">Comments</p>
      <CommentList comments={comments}></CommentList>
    </div>
  );
};

export default CommentsContainer;

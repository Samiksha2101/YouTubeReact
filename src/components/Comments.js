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
                text: "This is my comment",
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
                      {
                        name: "Samiksha",
                        text: "This is my comment",
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
              {
                name: "Samiksha",
                text: "This is my comment",
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
      <div className="ml-4  border-l">
        <CommentList comments={comment.replies}></CommentList>
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="ml-4">
      <p className="font-bold">Comments</p>
      <CommentList comments={comments}></CommentList>
    </div>
  );
};

export default CommentsContainer;

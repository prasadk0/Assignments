import { useState } from "react"

function Comment({comment}){
 const [reply,setReply] = useState("");
 const [replies,setReplies] = useState([]);
 const handleReply = () => {
    if (reply.trim()) {
      setReplies((prev) => [...prev, { text: reply, replies: [] }]);
      setReply("");
    }
  };  
  
  return (
    <div className="ml-6 mt-2">
      <p>{comment.text}</p>
      <input
        type="text"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        className="border border-gray-300 rounded-md mt-1"
        placeholder="Reply..."
      />
      <button
        onClick={handleReply}
        className="bg-black text-white p-1 rounded-md ml-2"
      >
        Reply
      </button>

      {replies.map((rep, index) => (
        <Comment key={index} comment={rep} />
      ))}
    </div>
  );

}
export default function NestedComments() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("");
    const addComment = () => {
        if (comment.trim()) {
          setComments((prev) => [...prev, { text: comment, replies: [] }]);
          setComment("");
        }
      };
    return (
       <div className="p-4">
        <h2 className="font-bold text-lg mb-2">Comments</h2>
        <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border border-gray-300 rounded-md"
        placeholder="Add a comment..."
      />
          <button
        onClick={addComment}
        className="bg-black text-white p-1 rounded-md ml-2"
      >
        Comment
      </button>
      <div className="mt-4">
        {comments.map((cmt, index) => (
          <Comment key={index} comment={cmt} />
        ))}
      </div>
       </div>
    )
}
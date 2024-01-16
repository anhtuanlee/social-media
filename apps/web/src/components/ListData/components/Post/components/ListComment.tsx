import { comment } from '@/types/comment';
import CommentItem from '../../Comment';
import { post } from '@/types/post';

function ListComment({
  data,
  post,
}: {
  data: comment.TDataComment[];
  post: post.TPost;
}): JSX.Element {
  return (
    <div>
      {data.length > 0 &&
        data.map((item) => {
          if (!item.parent_id) {
            return <CommentItem key={item.id} data={item} post={post} parent_id={item.id} />;
          }
          return null;
        })}
    </div>
  );
  //   const renderComments = (commentList: comment.TDataComment[], parentId?: string | null) => {
  //     if (parentId) {
  //       return commentList
  //         .filter((comment) => comment.parent_id === parentId)
  //         .map((comment, index) => {
  //           return (
  //             <div className="pl-12" key={index}>
  //               <CommentItem key={comment.id} data={comment} post={post} />;
  //               {renderComments(commentList, comment.parent_id)}
  //             </div>
  //           );
  //         });
  //     }
  //   };
  //   return <div>{renderComments(data)}</div>;
}

export default ListComment;

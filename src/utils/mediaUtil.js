export const sacarMedia = (data) => {
    const receivedComments = data?.receivedComments;
  
    if (!Array.isArray(receivedComments) || receivedComments.length === 0) {
      return 0;
    }
  
    const ratings = receivedComments
      .filter((comment) => comment?.rating !== undefined)
      .map((comment) => parseFloat(comment.rating));
  
    if (ratings.length === 0) {
      return 0;
    }
  
    const totalRating = ratings.reduce((accumulator, rating) => {
      return accumulator + rating;
    }, 0);
  
    const averageRating = totalRating / ratings.length;
  
    const roundedAverage = Math.round(averageRating * 10) / 10;
  
    return roundedAverage;
  };
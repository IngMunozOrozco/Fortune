const UserCard = ({ data, textColor }) => {
  
    return (
      <article className="fortune" style={{ color: textColor }}>
        <h1>
          {data.phrase}
        </h1>
    
        <div className="author-information">
          <p>
        
            <i className='bx bxs-leaf bx-sm bx-fw'>{data.author}</i>
          </p>
       
        
         
        </div>
      </article>
    );
  };
  
  export default UserCard;
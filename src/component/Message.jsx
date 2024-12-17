

function Message(props) {
    return (
      <div className='profile'>
        <div className='profile__one'>
          <img className='profile__img' src={props.img} alt='image'></img>
          <div className='profile__details'>
            <h4 > {props.Name} </h4>
            <p > {props.Msg} </p>
          </div>
        </div>
        <div className='profile__time'>
          <p> {props.time}</p>
          <p style={{ color: "green" }}>★</p>
        </div>
      </div>
    )
  }
export default Message 
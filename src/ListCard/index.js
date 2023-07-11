import './index.css'

const ListCard = props => {
  const {eachDetail, key, Deleting} = props
  const {web, user, pass, id, Checked} = eachDetail

  const Clicked = () => {
    Deleting(id)
  }
  return (
    <li className="small">
      <div className="letter">
        <button className="Lbtn">{web[0]}</button>
        <div>
          <p>{web}</p>
          <p>{user}</p>
          {Checked && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
              alt="stars"
            />
          )}
          {Checked === false && <p>{pass}</p>}
        </div>
      </div>
      <button data-testid="delete" onClick={Clicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default ListCard

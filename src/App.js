import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ListCard from './ListCard'
import './App.css'

class App extends Component {
  state = {
    web: '',
    user: '',
    pass: '',
    count: 0,
    status: true,
    list: [],
    search: '',
    Checked: false,
  }

  Web = event => {
    this.setState({web: event.target.value})
  }

  User = event => {
    this.setState({user: event.target.value})
  }

  Pass = event => {
    this.setState({pass: event.target.value})
  }

  Add = () => {
    const {web, user, pass, list} = this.state
    const newObj = {
      web,
      user,
      pass,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      list: [...prevState.list, newObj],
      status: false,
      web: '',
      pass: '',
      user: '',
      count: prevState.count + 1,
    }))
    console.log(list)
  }

  Search = event => {
    this.setState({search: event.target.value})
  }

  Deleting = id => {
    const {list} = this.state
    const Dlist = list.filter(each => each.id !== id)
    this.setState(prevState => ({list: Dlist, count: prevState.count - 1}))
  }

  Check = () => {
    const {Checked} = this.state
    if (Checked) {
      this.setState({Checked: false})
    } else {
      this.setState({Checked: true})
    }
  }

  render() {
    const {count, status, list, search, web, pass, user} = this.state
    const SearchResult = list.filter(each =>
      each.pass.toLowerCase().includes(search.toLowerCase()),
    )
    const leng = SearchResult.length
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo1"
          alt="app logo"
        />
        <div className="card1">
          <form className="inside">
            <h1 className="head">Add new password</h1>
            <div className="sides">
              <div className="icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="logo"
                  alt="website"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                onChange={this.Web}
                value={web}
              />
            </div>
            <div className="sides">
              <div className="icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="logo"
                  alt="username"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                onChange={this.User}
                value={user}
              />
            </div>
            <div className="sides">
              <div className="icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="logo"
                  alt="password"
                />
              </div>
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                onChange={this.Pass}
                value={pass}
              />
            </div>
            <div className="align">
              <button className="btn" onClick={this.Add}>
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
              className="manager"
              alt="password manager"
            />
          </div>
        </div>
        <div className="card2">
          <div className="pass">
            <div className="heads">
              <h1>Your passwords</h1>
              <button className="btn1">
                <p>{count}</p>
              </button>
            </div>
            <div className="left">
              <div className="searchlogo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="searchicon"
                  alt="search"
                />
              </div>
              <input
                type="search"
                className="search"
                placeholder="search"
                onChange={this.Search}
              />
            </div>
          </div>
          <hr className="hori" />
          <div className="show">
            <label htmlFor="check" name="Show passwords" value="checkbox">
              Show passwords
            </label>
            <input
              type="checkbox"
              className="btn3"
              onClick={this.Check}
              id="check"
              value="checkbox"
            />
            <p>Show password</p>
          </div>
          {count === 0 ||
            (leng === 0 && (
              <div className="imgs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  className="smart"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ))}
          <ul className="smalls">
            {status === false &&
              SearchResult.map(each => (
                <ListCard
                  eachDetail={each}
                  key={each.id}
                  Deleting={this.Deleting}
                />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function App() {
  return <div className="app">
    <div className="sidebar">
      <FriendsList />
      <FormAddFreind/>
      <Button>Add Friend</Button>
    </div>
    <FormSplitBill/>
  </div>
}


function FriendsList() {
  const friends = initialFriends

  return <ul>
    {friends.map((friend) => <Friend freind={friend} key={friend.id} />)}
  </ul>
}

function Friend({ freind }) {
  return <li>
    <img src={freind.image} alt={freind.name} />
    <h3>{freind.name} </h3>
    {freind.balance < 0 && <p className="red"> You owe {freind.name} {Math.abs(freind.balance)}$</p>}
    {freind.balance > 0 && <p className="green"> {freind.name} owes you {Math.abs(freind.balance)}$</p>}
    {freind.balance === 0 && <p className="g"> {freind.name} You owe no one</p>}

  <Button>Select</Button>
  </li>
}

function Button({children}){
  return <button className="button">{children}</button>
}
function FormAddFreind(){
  return <form className="form-add-friend">
    <label>🤼Freind Name</label>
    <input type="text" />

    <label>🖼Image Url</label>
    <input type="text" />

    <Button>Add</Button>
  </form>
}


function FormSplitBill(){
  return <form className="form-split-bill">
    <h2>Split a bill with X</h2>
    <label>💰 Bill Value</label>
    <input type="number" />

    <label>💱 Your Expense</label>
    <input type="number" />

    <label>👨‍🔧 X Expenses</label>
    <input type="text" disabled/>

    <label>Who is Paying the Bill?</label>
    <select>
      <option value="user">You</option>
      <option value="friend">X</option>
    </select>

    <Button>Split Bill</Button>
  </form>
}
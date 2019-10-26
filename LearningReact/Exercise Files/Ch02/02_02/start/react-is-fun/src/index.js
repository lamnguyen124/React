// import React from 'react'
// import ReactDOM from 'react-dom'

// var style = {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'Arial'
// }



// ReactDOM.render(
//     <div style={style}>
//         <h1 id="heading-element">Hello World!</h1>
//         <p>We're glad you're here</p>
//     </div>,
//     document.getElementById('root')
// )

// import React from 'react'
// import ReactDOM from 'react-dom'

// class Message extends React.Component {
//     render() {
//         console.log()
//         return (
//             <div>
//                 <h1 style={{ color: this.props.color }}>{this.props.msg}
//                 </h1>
//                 <p>I'll check back in {this.props.minutes} minutes</p>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Message color="blue" msg="how are you?" minutes={5} />, document.getElementById('root')
// )

// import React, { Component } from 'react'
// import { render } from 'react-dom'

// let skiData = {
//     total: 50,
//     powder: 20,
//     backcountry: 10,
//     goal: 100
// }

// const getPercent = decimal => {
//     return decimal * 100 + '%'
// }

// const calcGoalProgress = (total, goal) => {
//     return getPercent(total / goal)
// }

// const SkiDayCounter = ({ total, powder, backcountry, goal }) => {
//     return (
//         <section>
//             <div>
//                 <p>Total Days: {total}</p>
//             </div>
//             <div>
//                 <p>Powder Days: {powder}</p>
//             </div>
//             <div>
//                 <p>Backcountry Days: {backcountry}</p>
//             </div>
//             <div>
//                 <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
//             </div>
//         </section>
//     )
// }

// class SkiDayCounter extends Component {
//     getPercent = decimal => {
//         return decimal * 100 + '%'
//     }
//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total / goal)
//     }
//     render() {
//         const { total, powder, backcountry, goal } = this.props
//         return (
//             <section>
//                 <div>
//                     <p>Total Days: {total}</p>
//                 </div>
//                 <div>
//                     <p>Powder Days: {powder}</p>
//                 </div>
//                 <div>
//                     <p>Backcountry Days: {backcountry}</p>
//                 </div>
//                 <div>
//                     <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
//                 </div>
//             </section>
//         )
//     }
// }

// render(
//     <SkiDayCounter
//         total={skiData.total}
//         powder={skiData.powder}
//         backcountry={skiData.backcountry}
//         goal={skiData.goal}
//     />,
//     document.getElementById('root')
// )

import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

let bookList = [
    { "title": "Hunger" },
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
    { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
]

// class FavoriteColorForm extends React.Component {
//     slate = { value: '' }
//     newColor = e =>
//         this.setState({ value: e.target.value })

//     submit = e => {
//         console.log("New Color: ${this.state.value}")
//         e.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color:
//                 <input type="color"
//                         onChange={this.newColor} />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

render(
    // <FavoriteColorForm />,
    <Library books={bookList} />,
    document.getElementById('root')
)


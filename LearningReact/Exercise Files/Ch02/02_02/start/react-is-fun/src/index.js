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

import React, { Component } from 'react'
import { render } from 'react-dom'

const Book = ({ title, author, pages }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

const Library = () => {
    return (
        <div>
            <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260} />
            <Book title="White Teeth" author="Zadie Smith" pages={480} />
            <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={304} />
        </div>
    )
}

render(
    <Library />,
    document.getElementById('root')
)
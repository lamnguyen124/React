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

let bookList = [
    { "title": "Hunger", "author": "Roxane Gay", "pages": 320 },
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
    { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
]

const Book = ({ title, author, pages, freeBookmark }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'} </p>
        </section>
    )
}

const Hiring = () =>
    <div>
        <p>The library is hiring. go to www.library.com/jobs for more</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The library is not hiring. Check back later for more info.</p>
    </div>

class Library extends React.Component {

    state = {
        open: true,
        freeBookmark: false,
        hiring: true
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render() {
        const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark} />
                )}
            </div>
        )
    }
}



render(
    <Library books={bookList} />,
    document.getElementById('root')
)


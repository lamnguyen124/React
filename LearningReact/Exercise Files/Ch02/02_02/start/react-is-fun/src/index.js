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

import React from 'react'
import ReactDOM from 'react-dom'

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

class SkiDayCounter extends React.Component {
    render() {
        return (
            <section>
                <div>
                    <p>Total Days: {this.props.total}</p>
                </div>
                <div>
                    <p>Powder Days: {this.props.powderK}</p>
                </div>
                <div>
                    <p>Backcountry Days: {this.props.backcountry}</p>
                </div>
                <div>
                    <p>Goal: {this.props.goal}</p>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <SkiDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backgcountry={skiData.backcountry}
        goal={skiData.goal}
    />,
    document.getElementById('root')
)

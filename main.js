function App() {
    return (
        <div className='div1'>
            <h1>Quick Start</h1>
            <p style={{ marginTop: `20px`, lineHeight: `25px` }}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>

            <div className='table'>
                <ul>You will learn
                    {/* <div ClassName='div2'> */}
                    <li>  How to ceate and nest componrnts</li>
                    <li>  How to add markup and styles</li>
                    <li>  How to display data</li>
                    <li>  How to render conditions and lists</li>
                    <li>  How to respond to events and update the screen</li>
                    <li>  How to share data between components</li>
                    {/* </div> */}
                </ul>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)

// - dark-gray #23272F
// - gray #343A46
// - blue #149ECA

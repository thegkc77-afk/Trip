import React from 'react'

function Sign_in() {
  return (
    <>
    <section>
        <h1>Sing In</h1>

        <div>

            <div>
                <h1>Google</h1>
            </div>

            <div>
                <h1>Facebook</h1>
            </div>

            <div>
                <h1>Apple</h1>
            </div>
        </div>

        <p>Or use Email and Password</p>

        <div>
            <input type='text' placeholder='Email'/>
            <input type='number' placeholder='Password'/>
        </div>
        <button>Sign In</button>

    </section>
    </>
  )
}

export default Sign_in
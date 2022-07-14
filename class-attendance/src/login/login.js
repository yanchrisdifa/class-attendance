import './login.scss';

const Login = () => {
    return (
        <div className='container'>
            <div className="forms-container">
                <div className="forms-content">
                    <div className="logo-image-container">

                    </div>
                    <h2>Platform Name</h2>
                    <form>
                        <div className="form form-login form-login-username">
                            <p>Username</p>
                            <input type="text" placeholder="Input your username"/>
                        </div>
                        <div className="form form-login form-login-password">
                            <p>Password</p>
                            <input type="password" placeholder="Input your password"/>
                        </div>
                        <button type="submit" onClick={(e) => e.preventDefault()}>Login</button>
                    </form>
                </div>
            </div>
            <div className="hero-image-container"></div>
        </div>
    )
}

export default Login
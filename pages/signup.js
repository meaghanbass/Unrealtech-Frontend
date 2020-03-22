// import Layout from "../components/Layout";
// import SignUpComponent from "../components/Auth/SignUpComponent";

// const SignUp = () => {
//     return (
//         <Layout>
//             <h3 className="text-center">Sign up</h3>
//             <SignUpComponent />
//         </Layout>
//     );
// }

// export default SignUp;

import Layout from "../components/Layout";
import SignUpComponent from "../components/Auth/SignUpComponent";
import Link from 'next/link';

const Signup = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <h2 className="text-center pt-4 pb-4">Signup</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <SignUpComponent />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;
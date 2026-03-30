import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { setActiveUserSession } from '../utils/authSession';

const UserLoginForm = () => {
  const navigate = useNavigate();

  const getRedirectPathByRole = (role) => {
    if (role === 'admin') {
      return '/user/admin/project/all';
    }

    if (role === 'manager') {
      return '/user/manager/project/all';
    }

    if (role === 'employee') {
      return '/user/employee/project/all';
    }

    return '/home';
  };

  const [loginRequest, setLoginRequest] = useState({
    emailId: '',
    password: '',
    role: '',
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginRequest),
    })
      .then((result) => {
        console.log('result', result);
        result.json().then((res) => {
          console.log(res);

          if (res.success) {
            console.log('Got the success response');

            const jwtToken = res.user?.jwtToken;

            if (jwtToken) {
              console.log('JWT TOKEN not null, positive response');
              setActiveUserSession(res.user);

              toast.success(res.responseMessage, {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              setTimeout(() => {
                navigate(getRedirectPathByRole(res.user?.role), {
                  replace: true,
                });
              }, 1000);
            } else {
              toast.error(res.responseMessage, {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          } else {
            console.log("Didn't got success response");
            toast.error(res.responseMessage || 'Login failed', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error('It seems server is down', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: '25rem' }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">User Login</h4>
          </div>
          <div className="card-body">
            <form onSubmit={loginAction}>
              <div className="mb-3 text-color">
                <label htmlFor="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  id="role"
                  name="role"
                  value={loginRequest.role}
                >
                  <option value="0">Select Role</option>
                  <option value="admin"> Admin </option>
                  <option value="employee"> Employee </option>
                  <option value="manager"> Manager </option>
                </select>
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="emailId" className="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                />
              </div>
              <div className="mb-3 text-color">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
              </div>
              <button type="submit" className="btn bg-color custom-bg-text">
                Login
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;

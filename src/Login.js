import React from 'react';

function Login() {
  return (
    <div style={{ marginTop: '150px' }}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
      <div style={{
        display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.55)', backdropFilter: 'blur(30px)',
        borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px', padding: '20px', margin: '20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Login</h2>
          <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} type="text" placeholder="Username" />
          <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px' }} type="password" placeholder="Password" />
          <button style={{
            width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff',
            cursor: 'pointer', fontSize: '16px', marginBottom: '20px'
          }}>Login</button>
        </div>
      </div>
    </div></div>
  );
}

export default Login;

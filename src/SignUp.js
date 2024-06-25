import React from 'react';

function SignUp() {
  return (
    <div style={{ marginTop: '64px' }}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: '#f8f9fa' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.55)', backdropFilter: 'blur(30px)',
        borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '700px', margin: '20px'
      }}>
        <div style={{ flex: '1', padding: '20px', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Sign up now</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <input style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} type="text" placeholder="First name" />
            <input style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} type="text" placeholder="Last name" />
          </div>
          <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} type="email" placeholder="Email" />
          <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} type="password" placeholder="Password" />
          <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} type="text" placeholder="Contact Number" />
          <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px' }} type="text" placeholder="Address" />
          <button style={{
            width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff',
            cursor: 'pointer', fontSize: '16px', marginBottom: '20px'
          }}>Sign up</button>
        </div>
      </div>
    </div></div>
  );
}

export default SignUp;

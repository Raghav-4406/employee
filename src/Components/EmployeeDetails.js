import React from 'react';
import profilePic from '../assets/profile-pic.png'; // Add your profile picture in the assets folder

const EmployeeDetails = () => {
    const Box = ({ name, item }) => {
        return (
            <div style={{}}>
                <h6 style={{ color: 'grey' }}>{name}</h6>
                <h6 style={{ fontFamily: 'monospace', color: 'white' }}>{item}</h6>
            </div>
        )

    }
    return (
        <div className="employee-details card bg-dark text-white p-3 mb-5">
            <div style={{ display: 'flex' }}>
                <div className="profile-pic mr-3">
                    <img src='https://www.freepik.com/free-photos-vectors/employee' style={{ borderRadius: 100, width: 100, height: 100, backgroundColor: 'red' }} />
                </div>

                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <h3 style={{ alignSelf: 'flex-start' }}>Natashia Khaleira</h3>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 40 }}>
                        <Box name={'Role'} item={'Head of UX Design'} />
                        <Box name={'Phone Number'} item={'(+62)812 3456-7890'} />
                        <Box name={'Email Adress'} item={'natasiakhaleria@gmail.com'} />

                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
                <div style={{ display: 'flex', gap: 10, flexDirection: 'row', backgroundColor: 'grey', width: 250, padding: 10, borderRadius: 20 }}>
                    <img style={{ borderRadius: 60, width: 60, height: 60, backgroundColor: 'red' }} />
                    <div>


                        <p className="h4">309</p>
                        <span>Total Attendance</span>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: 10, flexDirection: 'row', backgroundColor: 'grey', width: 250, padding: 10, borderRadius: 20 }}>
                    <img style={{ borderRadius: 60, width: 60, height: 60, backgroundColor: 'red' }} />
                    <div >
                        <p className="h4">08:46</p>
                        <span>Avg Check in Time</span>
                    </div>
                </div><div style={{ display: 'flex', gap: 10, flexDirection: 'row', backgroundColor: 'grey', width: 250, padding: 10, borderRadius: 20 }}>
                    <img style={{ borderRadius: 60, width: 60, height: 60, backgroundColor: 'red' }} />
                    <div>
                        <p className="h4">17:04</p>
                        <span>Avg Check Out Time</span>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: 10, flexDirection: 'row', backgroundColor: 'grey', width: 250, padding: 10, borderRadius: 20 }}>
                    <img style={{ borderRadius: 60, width: 60, height: 60, backgroundColor: 'red' }} />
                    <div>
                        <p className="h4">Role Model</p>
                        <span>Employee Predicates</span>

                    </div>
                </div>

            </div>

            <div className="controls d-flex justify-content-between mt-3">
                <select name="timeframe" id="timeframe" className="custom-select w-25">
                    <option value="this-year">This Year</option>
                    {/* Add other options as needed */}
                </select>
                <button id="download-info" className="btn btn-success">Download Info</button>

            </div>
        </div>
    );
};

export default EmployeeDetails;

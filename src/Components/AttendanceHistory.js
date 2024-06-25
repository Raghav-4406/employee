import React from 'react';

const AttendanceHistory = () => {
    return (
        <div className="attendance-history card bg-dark text-white p-3">
            <h2>Attendance History</h2>
            <div className="history-controls d-flex justify-content-between mt-3">
                <div>
                    <button id="grid-view" className="btn btn-secondary">Grid View</button>
                    <button id="list-view" className="btn btn-secondary">List View</button>
                </div>
                <div>
                    <button id="sort" className="btn btn-secondary">Sort</button>
                    <button id="filter" className="btn btn-secondary">Filter</button>
                </div>
            </div>
            <div className="attendance-records row mt-3">
                <div className="record col-md-6 mb-3">
                    <div className="p-3 bg-secondary rounded">
                        <p>March 08, 2023</p>
                        <p>Check In Time: 08:53</p>
                        <p>Check Out Time: 17:15</p>
                    </div>
                </div>
                <div className="record col-md-6 mb-3">
                    <div className="p-3 bg-warning rounded">
                        <p>March 07, 2023</p>
                        <p>Check In Time: 08:27</p>
                        <p>Check Out Time: 17:09</p>
                    </div>
                </div>
                <div className="record col-md-6 mb-3">
                    <div className="p-3 bg-danger rounded">
                        <p>March 06, 2023</p>
                        <p>Check In Time: -</p>
                        <p>Check Out Time: -</p>
                    </div>
                </div>
                <div className="record col-md-6 mb-3">
                    <div className="p-3 bg-secondary rounded">
                        <p>March 05, 2023</p>
                        <p>Check In Time: 08:55</p>
                        <p>Check Out Time: 17:10</p>
                    </div>
                </div>
                <div className="record col-md-6 mb-3">
                    <div className="p-3 bg-warning rounded">
                        <p>March 04, 2023</p>
                        <p>Check In Time: 08:40</p>
                        <p>Check Out Time: 17:02</p>
                    </div>
                </div>
                {/* Add more records as needed */}
            </div>
        </div>
    );
};

export default AttendanceHistory;

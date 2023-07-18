/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Update from './Update/Update';

const Home = () => {
    const { register, handleSubmit } = useForm();

    const [myData, setMyData] = useState([])
    const [delstate, setDelstate] = useState(false)

    const onSubmit = data => {
        fetch("http://localhost:5000/newdata", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        setDelstate(!delstate);
    };

    useEffect(() => {
        fetch("http://localhost:5000/mydata")
            .then(res => res.json())
            .then(data => setMyData(data))
    }, [delstate])
    const handleDelete = item => {
        setDelstate(!delstate);
        fetch(`http://localhost:5000/deletedata/${item._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
    }
    return (
        <div>
            <div className='flex justify-center items-center md:my-50 dark:bg-slate-800'>
                <div className='p-5 m-5 md:w-3/12 rounded-2xl space-y-2'>
                    <h2 className='text-2xl font-bold text-center text-gray-700 dark:text-white'>ADD STUDENT</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Roll</span>
                            </label>
                            <input type="text" required  {...register("roll")} name="roll" placeholder="roll" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required  {...register("name")} name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Session</span>
                            </label>
                            <input type="text" required  {...register("session")} name="session" placeholder="session" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Current Year</span>
                            </label>
                            <input type="text" required  {...register("current_year")} name="current_year" placeholder="current_year" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Semester</span>
                            </label>
                            <input type="text" required  {...register("semester")} name="semester" placeholder="semester" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="bg-[#e2136e] text-white font-semibold rounded py-1" type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-bold text-center text-gray-700 dark:text-white'>MY DATA</h2>
                <table className='w-8/12 mx-auto mt-10 text-center'>
                    <thead>
                        <tr>
                            <th>SL </th>
                            <th>ROLL</th>
                            <th>Name</th>
                            <th>Session</th>
                            <th>Current Year</th>
                            <th>Semester</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((data, i) =>
                                <tr key={data._id}>
                                    <td>{i}</td>
                                    <td>{data.roll}</td>
                                    <td>{data.name}</td>
                                    <td>{data.session}</td>
                                    <td>{data?.current_year}</td>
                                    <td>{data.semester}</td>
                                    <td>
                                        <button onClick={()=>handleDelete(data)}>Delete</button>
                                    </td>
                                    <td> <Link to={`/update/${data._id}`}>Update</Link> </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
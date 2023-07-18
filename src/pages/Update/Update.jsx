/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { register, handleSubmit } = useForm();

    const id = useParams()
    const onSubmit = data => {
        fetch(`http://localhost:5000/updatedata/${id.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    };
    return (
        <div className='p-5 m-5 md:w-3/12 rounded-2xl space-y-2 mx-auto'>
            <h2 className='text-2xl font-bold text-center text-gray-700 dark:text-white'>ADD STUDENT</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Roll</span>
                    </label>
                    <input type="text"   {...register("roll")} name="roll" placeholder="roll" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"   {...register("name")} name="name" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Session</span>
                    </label>
                    <input type="text"   {...register("session")} name="session" placeholder="session" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Current Year</span>
                    </label>
                    <input type="text"   {...register("current_year")} name="current_year" placeholder="current_year" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Semester</span>
                    </label>
                    <input type="text"   {...register("semester")} name="semester" placeholder="semester" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input className="bg-[#e2136e] text-white font-semibold rounded py-1" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default Update;
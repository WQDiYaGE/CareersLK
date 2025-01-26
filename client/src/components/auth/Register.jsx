import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'

const Register = () => {
  const {user} = useSelector(store => store.auth);
  const [input, setInput] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: '',
    file: ''
  });

  const navigate = useNavigate();

  const formatPhoneNumber = (value) => {
    // Remove any characters that are not numbers
    const cleaned = value.replace(/\D/g, '');
    // Add spaces in the format +94 xx xx xx xxx
    let formatted = cleaned;
    if(cleaned.startsWith("94")) {
      formatted = `+94 ${cleaned.slice(2, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 11)}`;
    } else if(cleaned.length > 0) {
      formatted = `+94 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 11)}`;
    }

    return formatted.trim();

  }

  const changeEventHandler = (e) => {
    const { name, value } = e.target;

    // Check if the field being changed is the phone number
    const formattedValue = name === 'phoneNumber' ? formatPhoneNumber(value) : value;

    setInput({
      ...input,
      [name]: formattedValue
    });
  }
  const changeFileHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files[0]
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fullName', input.fullName);
    formData.append('email', input.email);
    formData.append('phoneNumber', input.phoneNumber);
    formData.append('password', input.password);
    formData.append('role', input.role);
    if (input.file) {
      formData.append('file', input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong! Please try again later.');
      }

    }
  }

  useEffect(() => {
          if(user) {
              navigate("/");
          }
      }, []);
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Register</h1>
          <div className='my-2 text-left'>
            <Label >Full Name</Label>
            <Input
              type='text'
              value={input.fullName}
              name='fullName'
              onChange={changeEventHandler}
              placeholder='John Doe'
            />
          </div>
          <div className='my-2 text-left'>
            <Label>Email</Label>
            <Input
              type='email'
              value={input.email}
              name='email'
              onChange={changeEventHandler}
              placeholder='johndoe@example.com'
            />
          </div>
          <div className='my-2 text-left'>
            <Label>Phone Number</Label>
            <Input
              type='text'
              value={input.phoneNumber}
              name='phoneNumber'
              onChange={changeEventHandler}
              placeholder='+94 xx xx xx xxx'
            />
          </div>
          <div className='my-2 text-left'>
            <Label>Password</Label>
            <Input
              type='password'
              value={input.password}
              name='password'
              onChange={changeEventHandler}
              placeholder='Password (Keep it safe)'
            />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r1" className='text-left'>Student</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r2" className='text-left'>Recruiter</Label>
              </div>
            </RadioGroup>
            <div className='flex items-center gap-2'>
              <Label>Profile</Label>
              <Input
                accept='image/*'
                type='file'
                onChange={changeFileHandler}
                className='cursor-pointer'
              />
            </div>
          </div>
          <Button type='submit' className='w-full my-4'>Register</Button>
          <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>

        </form>
      </div>
    </div>

  )
}

export default Register

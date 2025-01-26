import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from '../ui/button'
import { User2 } from 'lucide-react'
import { LogoutOutlined } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import CareersLK from '@/assets/CareersLK (Updated).png'
// client\src\assets\CareersLK (Updated).png


const Navbar = () => {
    const { user } = useSelector(store => store.auth); // true if user is logged in
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.post(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate('/');
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <img src={CareersLK} alt='CareersLK' className='h-16 w-auto' />
                    {/* <h1 className='text-2xl font-bold'>Careers <span className='text-[#F83002]'>LK</span></h1> */}
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {
                            user && user.role == 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/browse">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>

                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant='outline'>Login</Button></Link>
                                <Link to="/register"><Button className='bg-[#6A38C2] hover:bg-[#5b30a6]'>Register</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className='cursor-pointer rounded-full overflow-hidden border border-gray-300 shadow-sm'>
                                        <AvatarImage
                                            src={user?.profile?.profilePicture}
                                            alt="@shadcn"
                                            className='w-10 h-10 object-cover'
                                        />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div>
                                        <div className='flex gap-4 space-y-2'>
                                            <Avatar className='cursor-pointer rounded-full overflow-hidden border border-gray-300 shadow-sm'>
                                                <AvatarImage
                                                    src={user?.profile?.profilePicture}
                                                    alt="@shadcn"
                                                    className='w-10 h-10 object-cover'
                                                />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>{user?.fullName}</h4>
                                                <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 text-gray-600'>
                                            {
                                                user && user.role == 'student' && (
                                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                        <User2 />
                                                        <Button variant="link"><Link to='/profile'>View Profile</Link></Button>
                                                    </div>

                                                )
                                            }
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogoutOutlined />
                                                <Button onClick={logoutHandler} variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar

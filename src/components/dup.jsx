<div className='table-container overflow-x-auto mb-10'> <table className="table-auto w-full overflow-hidden rounded-md mb-10">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-50'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 text-center'>
                                        <div className='flex justify-center items-center'>

                                            <a href={item.site} target='_blank'>
                                                {item.site}</a>

                                            <div className='size-7 cursor-pointer mx-2 flex items-center justify-center' onClick={() => { copyText(item.site) }}>
                                                <img className='h-6' src="icons/copy.png" alt="" />
                                            </div>
                                        </div>
                                    </td>


                                    <td className='py-2 text-center '>
                                        <div className='flex justify-center items-center'>
                                            <span>{item.username}</span>
                                            <div className='size-7 cursor-pointer mx-2 flex items-center justify-center' onClick={() => { copyText(item.username) }}>
                                                <img className='h-6' src="icons/copy.png" alt="" />
                                            </div>
                                        </div>
                                    </td>


                                    <td className='py-2 text-center '>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.password}</span>
                                            <div className='size-7 cursor-pointer mx-2 flex items-center justify-center' onClick={() => { copyText(item.password) }}>
                                                <img className='h-6' src="icons/copy.png" alt="" />
                                            </div>
                                        </div>
                                    </td>


                                    <td className='py-2 text-center '>
                                        <div className='flex justify-center items-center gap-2'>

                                            <span className='cursor-pointer' onClick={()=>{editPassword(item.id)}}>
                                                <img src="icons/edit.svg" alt="" />
                                            </span>

                                            <span className='cursor-pointer'  onClick={() =>{deletePassword(item.id)}}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>

                                </tr>
                            })}
                        </tbody>
                    </table>
                    </div>
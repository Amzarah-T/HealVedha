"use client";

import React, { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

function UsersCreate({ saveData, editData, deleteData, editMode, deleteMode, dataObject, isRegisterMode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [userRole, setUserRole] = useState(dataObject?.userrole || 'user');
    const [password, setPassword] = useState(dataObject?.password);
    const [isPasswordMismatch, setIsPasswordMismatch] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(dataObject?.password);

    useEffect(() => {
        setIsPasswordMismatch(confirmPassword !== password);
    }, [password, confirmPassword])

    return (
        <div>
            <div>
                {editMode ? <Button onPress={onOpen} color="primary" className="max-w-fit">Edit</Button>
                    : deleteMode ? <Button onPress={onOpen} color="danger" className="max-w-fit">Delete</Button>
                        : <Button onPress={onOpen} color={isRegisterMode ? 'default' : "success"} variant={isRegisterMode ? 'flat' : 'solid'} className="max-w-fit">{isRegisterMode ? "Register" : "Create"}</Button>
                }
            </div>

            <Modal
                isOpen={isOpen}
                placement={'center'}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Register User</ModalHeader>
                            <ModalBody>
                                <form action={(formData) => {
                                    if (editMode) {
                                        editData(formData, dataObject);
                                        onClose();
                                    } else if (deleteMode) {
                                        deleteData(formData, dataObject);
                                        onClose();
                                    } else {
                                        saveData(formData);
                                        onClose();
                                    }
                                }} className='flex gap-5 flex-col'>
                                    <Input label='First Name' name='firstName' required={true} defaultValue={dataObject?.firstName} />
                                    <Input label='Email' type='email' name='email' required={true} defaultValue={dataObject?.email} />
                                    <Input label='User Role' name='userrole' className={isRegisterMode ? 'hidden' : ''} required={true} value={userRole} />
                                    {!isRegisterMode ?
                                        <Dropdown>
                                            <DropdownTrigger>
                                                <Button
                                                    variant="bordered"
                                                >
                                                    Select User Role
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu aria-label="Static Actions">
                                                <DropdownItem key="admin" onClick={(role) => setUserRole('admin')}>Admin</DropdownItem>
                                                <DropdownItem key="user" onClick={(role) => setUserRole('user')}>User</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        : <></>
                                    }

                                    {!deleteMode ? <>
                                        {/* <Input label='Password' name='password' required={true} defaultValue={dataObject?.password} /> */}
                                        <Input
                                            label="Password"
                                            type="password"
                                            value={password}
                                            name='password'
                                            required={true} defaultValue={dataObject?.password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <Input
                                            label="Confirm Password"
                                            type="password"
                                            name='confirmPass'
                                            value={confirmPassword}
                                            required={true} defaultValue={dataObject?.password}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        {isPasswordMismatch && (
                                            <div className='flex'>
                                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                                <p className="text-sm text-red-500">{'Password mismatch'}</p>
                                            </div>
                                        )}
                                    </>
                                        : <></>
                                    }

                                    <Button type="submit" className={isPasswordMismatch ? 'cursor-not-allowed' : 'cursor-pointer'} color={deleteMode ? "danger" : isPasswordMismatch ? 'danger' : "primary"} disabled={isPasswordMismatch}>
                                        {deleteMode ? "Confirm Delete" : "Save"}
                                    </Button>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default UsersCreate;
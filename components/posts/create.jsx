"use client";

import React, { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';

function PostCreate({ savePost, editPost, deletePost, editMode, deleteMode, post }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <div>
                {editMode ? <Button onPress={onOpen} color="primary" className="max-w-fit">Edit</Button>
                    : deleteMode ? <Button onPress={onOpen} color="danger" className="max-w-fit">Delete</Button>
                    : <Button onPress={onOpen} color="success" className="max-w-fit">Create</Button>
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
                            <ModalHeader className="flex flex-col gap-1">Create Data</ModalHeader>
                            <ModalBody>
                                <form action={(formData) => {
                                    if (editMode) {
                                        editPost(formData, post);
                                        onClose();
                                    } else if (deleteMode) {
                                        deletePost(formData, post);
                                        onClose();
                                    } else {
                                        savePost(formData);
                                        onClose();
                                    }
                                }} className='flex gap-5 flex-col'>
                                    <Input label='Title' name='title' required={true} defaultValue={post?.title}/>
                                    <Input label='Image URL' name='image' required={true} defaultValue={post?.image}/>
                                    <Button type="submit" color={deleteMode ? "danger" : "primary"}>
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

export default PostCreate;
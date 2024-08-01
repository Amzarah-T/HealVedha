"use client";

import React from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';

function ResearchPapersCreate({ saveData, editData, deleteData, editMode, deleteMode, dataObject, isRegisterMode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                            <ModalHeader className="flex flex-col gap-1">Add Research Papers</ModalHeader>
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
                                    <Input label='Title' name='title' required={true} defaultValue={dataObject?.title} />
                                    <Input label='URL' name='url' required={true} defaultValue={dataObject?.url} />

                                    <Button type="submit" color={deleteMode ? "danger" : "primary"} >
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

export default ResearchPapersCreate;
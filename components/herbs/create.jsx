"use client";

import React, { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';

function HerbsCreate({ saveData, editData, deleteData, editMode, deleteMode, dataObject }) {
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
                                    <Input label='English' name='labelEn' required={true} defaultValue={dataObject?.labelEn}/>
                                    <Input label='Sinhala' name='labelSn' required={true} defaultValue={dataObject?.labelSn}/>
                                    <Input label='Tamil' name='labelTm' required={true} defaultValue={dataObject?.labelTm}/>
                                    <Input label='Scientific' name='labelSc' required={true} defaultValue={dataObject?.labelSc}/>
                                    <Input label='Image URL' name='image' required={!deleteMode} defaultValue={dataObject?.image}/>
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

export default HerbsCreate;
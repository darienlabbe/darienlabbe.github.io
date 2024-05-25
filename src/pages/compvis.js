import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SmallNav from "../components/SmallNav";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";

function CompVis() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Computer Vision</h1>
                </div>
                <div className='flex flex-col items-start max-w-[1000px] m-auto max-lg:mx-10 pb-20'>
                    <h1 className='text-xl max-md:text-lg font-bold pb-2'>CS 479: Computer Vision</h1>
                    <p>This page holds the projects that I have created throughout the course CS 479 taught by Dr. Gurman Gill. This course was taken at Sonoma 
                        State and dives into the world of computer vision, referring to algorithms for the detection, classification, recognition, and/or 
                        segmentation of objects of interest in a photo, series of photos, and/or video. All the code for my projects will be contained in Jupyter 
                        Notebooks uploaded to my GitHub. Click 
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-479' className='text-t-link font-bold'> here</a>, 
                        or click the image to view my current live repositories. If you wish to view a specific project's repository, click on its image 
                        for that project to view its code on my GitHub.</p>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-479/blob/main/MNIST_Data_CNN.ipynb'><img src='mnist.png' className='hover:scale-105 cursor-pointer border-border-gray border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto mb-20 max-md:mb-0' alt='computer vision'/></a>
                        <div className='mb-20'>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>MNIST Data Set:</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>This project uses a relatively simple and small Convolutional Neural Network (CNN) in order to attempt to predict the value of a hand written 
                                    numerical digit. This project is contained entirely in a Jupyter Notebook and can be run on Google Colab. If you wish to view the code, click 
                                    on the image.</p><br/>
                                <p>The final accuracy tested against validation data for the CNN was: 97.75%</p>
                            </div>
                        </div>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-479/tree/main/Facial_Recognition'><img src='faces.png' className='hover:scale-105 cursor-pointer border-border-gray border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto mb-20 max-md:mb-0' alt='faceial recognition'/></a>
                        <div className='text-base max-md:text-sm'>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Face Recognition:</h1>
                            <div className='mb-20'>
                                <p>This project uses Principal Component Analysis (PCA) for facial recognition. With the use of PCA, the eigenfaces can be generated and then 
                                    used to reconstruct the original faces using linearly combining them. With these eigenfaces a mini facial recognition system can be implemented, 
                                    implementing one of the images the model was trained on and then predicts the person given to the model. If you wish to view the code, click 
                                    on the image.</p><br/>
                                <p>The final accuracy of the PCA facial recognizer was: 95%</p>
                            </div>
                        </div>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-479/blob/main/Euro_Sat_Land_Use_Classification.ipynb'><img src='eusat.png' className='hover:scale-105 cursor-pointer border-border-gray border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto mb-20 max-md:mb-0' alt='euro sat lad use'/></a>
                        <div className='mb-20'>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>EuroSat LandUse:</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>This project uses the EuroSat dataset to construct a number of different CNNs attempting to predict different satellite images. The first CNN 
                                    is a simple CNN that only uses a few layers. The second uses transfer learning in order to use the ResNet50 pretrained model. The third model 
                                    is similar to the second model, however, the third model makes an attempt at adding more layers and attempts to fine-tune the model in order 
                                    to get even higher accuracies. If you wish to view the code, click on the image.</p><br/>
                                <p>The final accuracy tested against validation data for the third CNN was: 96.0%</p>
                            </div>
                        </div>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-479/tree/main/Natural15_Scene_Classification'><img src='natscenes.png' className='hover:scale-105 cursor-pointer border-border-gray border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto mb-20 max-md:mb-0' alt='natscenes'/></a>
                        <div className='mb-20'>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Natural Scenes 15:</h1>
                            <div className='text-base max-md:text-sm'>
                            <p>This project, though quite similar to the previous project, EuroSat, the Natural 15 dataset does have some issues of overfitting and thus adds 
                                    an extra challenge when developing CNNs for this particular dataset. For this project in particular, I developed four different CNNs, starting 
                                    simple and working towards more and more complex designs. The first CNN was a simple one with only 11 total layers and a goal of demonstrating 
                                    the overfitting problem. The second CNN that I made tries to use a number of different techniques to mitigate the overfitting problem, like 
                                    kernal L2 regularizors with weight decay, dropout layers, and batch normalization. The second CNN did not focus on trying to improve the overall 
                                    practical accuracy of the model, and instead was a way of testing how to decrease the overall amount of overfitting. The third CNN that I created 
                                    used what I learned in the second CNN and I utilized transfer learning to include the ResNet50 model with a number of additional layers as well. 
                                    This third CNN ended with an accuracy of about ~74%-76% validation accuracy when testing and I felt that I could do better so I made a fourth 
                                    CNN. The fourth CNN was a culmination of what I had learned from the previous three CNNs as well as a new transfer model, the VGG19 model. In 
                                    the end I was able to improve my overall model by quite a lot through a lot of fine-tuning and the inclusion of a number of other techniques 
                                    to attempt to increase my overall accuracy. If you wish to view the code, click on the image.</p><br/>
                                <p>The final accuracy tested against validation data for the third CNN was: 89.5%</p>
                            </div>
                        </div>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-479/tree/main/BioSoundSCape'><img src='biosound.png' className='hover:scale-105 cursor-pointer border-border-gray border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto mb-20 max-sm:mb-0' alt='bisound'/></a>
                        <div>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>BioSoundSCape:</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>The BioSoundSCape project was my final project for the CS 479 course. I was in a group with two other students and we attempted to tackle the task 
                                    of using the previously developed project, discussed in great detail in the scientific paper 
                                    <a target='_blank' rel="noreferrer" href='https://www.sciencedirect.com/science/article/pii/S1470160X22003028' className='text-t-link font-bold'> here</a>, 
                                    on the new sound data recently collected in South Africa, with nearly 15 GBs of wav files in total. To give a breif overview of the goal of the 
                                    original project, the project aimed to collect sound data from around Sonoma County, turn those sound files into spectrograms, develop a CNN that 
                                    could find particular regions of interest (ROIs) in those sound files, and then determine what category of sound those regions belong to (like 
                                    for instance animal sounds, human sounds, etc). Being able to separate the mass amount of data collected into data points of each type of sound 
                                    present in certain regions, helps determine the biological diversity of particular regions. This then can give us valuable ecological knowledge 
                                    for different regions in a vast area.</p><br/>
                                <p>My team's goal was to use what the previous team learned using the Sonoma County data on the new data from South Africa. This new data was captured 
                                    differently than the previous data and thus we could not simply use the same CNN as before, we had to fine-tune it and experiment with new/different 
                                    ways in order to improve its overall accuracy. This project eventually shifted into becoming an Internship for myself and one other student so that 
                                    we could continue our work.</p><br/>
                                <p>If you wish to view the code that we developed, click on the image.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-2xl:h-40'>
                <div className="fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden">
                    <Link to='/Server'><LeftArrow/></Link>
                </div>
                <div className="fixed bottom-[50%] right-10 flex justify-between items-center p-4 max-2xl:hidden">
                    <Link to='/Graphics'><RightArrow/></Link>
                </div>
                <div className="hidden justify-center items-center p-4 space-x-10 max-2xl:flex">
                    <Link to='/Server'><LeftArrow/></Link>
                    <Link to='/Graphics'><RightArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default CompVis;
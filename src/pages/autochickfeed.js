import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SmallNav from '../components/SmallNav.js';
import LeftArrow from "../components/LeftArrow.js";
import RightArrow from "../components/RightArrow.js";

function AutoChickFeed() {
    // Ensure that when the page loads the top of the page is what is shown
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl max-sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>The Automatic Chicken Feeder</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Chicken-Feeder-Senior-Project'><img src='autochickfeed.png' className='hover:scale-105 cursor-pointer border-border-gray border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto' alt='automatic chicken feeder'/></a>
                        <div>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Project: The Automatic Chicken Feeder</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>This is my Sonoma State University Computer Science Capstone project. Over the course of several months I developed a React web app hosted 
                                    on a Raspberry Pi 4B that is connected to a relay to switch a motor on and off in order to automatically feed chickens. This project had a 
                                    lot of firsts for me: I learned how to soldier, how to control motors with GPIO pins, the science behind inductive kickback, how GFCI works, 
                                    how WebSockets work, full stack development, how to use the React framework, and so much more.</p><br/>
                                <p>I created a video presentation where I go over my project, demonstrating how I eventually arrived at my solution, how I constructed my solution, 
                                    and my final product in action. If you wish to view this video and learn more about my project I uploaded my presentation to YouTube and you can 
                                    watch it <a target='_blank' rel="noreferrer" href='https://youtu.be/hTrQwCQ2fgw' className='text-t-link font-bold'>here</a>.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center pb-20 drop-shadow-md'>
                    <div>
                        <h1 className='text-3xl max-md:text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold pb-10'>Project Dev Log</h1>
                    </div>
                    <div className='max-w-[1000px] max-xl:max-w-[800px] max-lg:max-w-[600px] max-md:max-w-[400px] max-sm:max-w-[270px]'>
                        <ul className='list-disc max-md:text-sm'>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>12/01/2023:</p>Today I looked more into the Feather RP2040 chip. I learned about the 
                                Read Evaluate Print Loop (REPL) which allows for individual lines of code to immediate run. In order to view the REPL you need to connect to the chip 
                                through the Serial Console. Connecting to the Serial Console involves using a bash terminal to view the currently available tty connections in the 
                                "/dev/" folder. Using the command "ls /dev/tty.*" shows all of these possible connections, and with the chip plugged into the computer, the chip 
                                connection name is visible. Then using the screen command, we can then screen into the chip. The command I ran for this was "screen /dev/tty.usbmodem101".
                                This allowed access into viewing the REPL and thus allowed for the viewing of output statements using the print function in the "code.py" file on the 
                                chip. Then using basic code that interacts with the led light on the chip and a print statement, we are able to run the code using the REPL and see 
                                the output on the console and on the chip itself as the led blinks on and off.
                                <ul className='list-circle pl-20 max-md:pl-12'> 
                                    <li>One thing that I have noticed is that after closing the terminal that connects to the chip through the REPL, it seems to require the chip to  
                                        be unplugged after being ejected, potentially multiple times. It seems that maybe a connection has been made and thus making a new screen in 
                                        is erroring, more research is needed though.</li>
                                </ul>
                            </li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>01/31/2024:</p>Today I was able to soldier together the Feather RP2040 and its header  
                                pins. I was also able to figure out how to control the GPIO pins,getting them to output signal to a relay switch. With a wire connected to the 3.3V, 
                                ground, and a GPIO pin, the relay can be set up so that when connected, a true value can be sent from the correct pin to allow the relay to switch to 
                                open and a false can swap back to a closed option. Hopefully, the motor can utilize the normally closed and common outputs to be turned on and off using 
                                this mechanism. If not, there may need to be further investigation into an H bridge for two separate reasons: hopefully an H bridge can receive higher 
                                current and thus will be able to be used as a switch for the motor, and it will allow for any kickback current from the motor being turned off to not 
                                affect the feather.
                                <ul className='list-circle pl-20 max-md:pl-12'>
                                    <li><p>Note on inductive kickback:</p>
                                        For DC motors they work through induction which means that they store energy in magnetic fields. So when you power on a DC motor, a magnetic  
                                        field is created around the motor. A characteristic of inductors is that they resist change, when they are not active they resist becoming a 
                                        magnetic field and vise versa. So when you suddenly remove voltage, from say a switch closing, the magnetic field will attempt to keep the 
                                        electricity flowing. Since there is no where for the electricity to go the voltage across the motor terminals increase instead, sometimes to 
                                        radically high levels. This can become dangerous to electrical components in the system and, at high enough voltages, electricity can even arc 
                                        out of the closed system.
                                    </li>
                                </ul>
                            </li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>02/21/2024:</p> After discovering that the final motor that I will be using is an AC motor 
                                I have done a bit of research on the components I have and on whether or not I need to worry about Inductive kickback. As noted above, inductive kickback is 
                                mainly a problem with large DC motors so now that I know that I am only using an AC motor for the end product I looked into the inductive kickback possibility. 
                                Thus far, it seems that inductive kickback will be an issue. Another thing I learned about was that the relay module may be able to switch between on and off 
                                for the motor even at its ac 110v operating power. Currently, I would not be able to use the relay to control both the CW and CCW directions of the motor. The 
                                main problem I have now is how to power the motor. I only have a DC power supply and not an AC power supply and the only thing I can think of to do is to take 
                                a plug and cut it to allow for me to access the positive and negative wires so that I can hook up the positive and negative terminals in the relay and motor. 
                                I need to do more research on both the relay module and on the motor to be sure that my understanding now is accurate and I need to look into how to power the 
                                motor. On the relay side I also need to look into if it will become burnt out at this level and if I need to instead need a more robust relay that wont be burnt 
                                out by this power level. I may need to reconsider choice of motor, discuss with Dr. Soto</li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>03/06/2024:</p>Today was a lot of research where I attempted to answer a lot of different 
                                questions. I looked into diodes, transistors, ac and dc motors, usb voltage isolators, raspberry pis, GFCI, ground connections, fuses, relays, and more. 
                                To solve the potential for potential motor malfunction, a fuse can be added in between the power source and motor allowing for extra fire protection. GFCI 
                                allows for the entire circuit is protected in case of ground short, helping further protect users in case of shorting. A ground wire connection for the 
                                motor helps even further, since should the internal windings in the motor ware enough to short to the metal casing of the motor, the outer case of the 
                                motor could be electrified to line voltage levels, being potentially deadly in the worst cases. As for usb protection, using a usb voltage isolator would 
                                be good if a voltage isolator for usb-c's existed, however, since I would need to double adapter it, and I need to switch my pi to something that can be 
                                controlled remotely through ssh, it seems that I shouldn't worry about doing something like this. As for raspberry pis, it seems like I could do the project 
                                with something like a Raspberry Pi 4B, Zero, or Pico. More research is still needed to narrow down the right one for this project. I was also able to create 
                                a circuit diagram shown below with everything except the pi included. An overview project diagram is still needed and I need the circuit verified to ensure 
                                that the numbers provided are accurate/reasonable for this application.</li>
                            <li className='list-none py-5'><a target='_blank' href='/public/projectdiagram.png'><img src='projectdiagram.png' className='border-border-gray border-2 drop-shadow-lg rounded-md m-auto' alt='project diagram'/></a></li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>03/13/2024:</p> Today I finished creating my project's overview diagram to illustrate how everything 
                                works together. The image is provided above. I needed to nail down a few specifics about my project and what end game hardware I will be using in order to know how 
                                they will be interconnected to each other. So I did some research and came up with some solutions.
                                <ul className='list-circle pl-20 max-md:pl-12'>
                                    <li>I learned more about Raspberry Pis in general and I decided to go with the Raspberry Pi 4b for mainly two reasons: first because it has pre-built wifi capable
                                        connection and second, because of the 5th generation being out I was able to get it for a lower price than I expected. It ended up being about the same price 
                                        as what the Pi 3, 2, and Zero models right now (~$35).</li>
                                    <li>For relays, I found a much better solution to what we currently have switching the motor on and off and I am confident that this will be able to last much 
                                        longer too. I found a Controllable Four Outlet Power Relay which you can look at <a target='_blank' rel="noreferrer" href='https://www.adafruit.com/product/2935?gad_source=1&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW_Ajt2huRk3PewMjwra-UPBQW-iZ56xynBo9Cr8_z00Z8OcHv9EUFsaAo4hEALw_wcB' className='text-t-link font-bold'>here </a> 
                                        which is essentially a relay built to handle 120V AC and can be controlled by a Pi or Arduino to switch the two normally off outlets to on and the one normally 
                                        on outlet to off. There is a fourth outlet provided that is always on which can be used to power the Pi without the need to run multiple connections for the Pi 
                                        and for the motor. I already ordered these two things and they should be arriving on march 20th.</li>
                                    <li>Now that I have the diagram made, I think that my next steps are to recreate what I have thus far established with the RP2040 and do so with the RP 4B, the power 
                                        switch relay, and the AC motor. This recreation will at first be rudimentary since I just want to focus on getting the motor to turn on and off in an infinite 
                                        loop for now, however, I also want to try to do so while being completely severed from physical connection to the pi this time. Since the Pi is capable of being 
                                        controlled through an SSH connection, I can write and run code on the Pi through SSH on my laptop. From here I will be able to start moving onto my next steps 
                                        where I try to build a simple JavaScript page that can control the Pi through a web connection.</li>
                                    <li><p>Furthermore, I did more research on other subjects as well:</p>
                                        GFCI watches for current leaving and not returning, if there is a difference the connection is stopped and thus protection is provided. Adding a fuse between 
                                        the motor and power source could help ensure that there is not excess power being delivered to the motor and therefore this helps with fire prevention. Ground 
                                        connection, while not necessary, if the motor was to ware down in a way that allows the body of the motor to short the connection will allow for line voltage to 
                                        charge the outer metal body of the motor, exposing you directly to line voltage, simply touching the motor while standing on the ground could be deadly due to 
                                        the 60mA potential.</li>
                                </ul>
                            </li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>03/25/2024:</p>Using the RP2040, 120V relay switch, and the modified power cable connected to the 110V 
                                motor, I was able to connect everything correctly and it all functioned as intended. With an os loaded on my micro sd, I will setup my raspberry pi 4 to hopefully do 
                                the same thing. With an os on my raspberry pi, I will try to ssh into it and then attempt to recreate the code I already created in order to control the motor with 
                                the pi.
                                <ul className='list-circle pl-20 max-md:pl-12'>
                                    <li>I need to add comments and ensure that the current code is polished and then add the finalized RP2040 code to the Github.</li>
                                    <li>Need to bring diodes and micro sd card to the lab and start initializing the raspberry pi with an os and then see how SSH connection works.</li>
                                    <li>After successful SSH connection, I need to focus on recreating the same code as is designed for the RP2040 on the Raspberry Pi 4.</li>
                                    <li>For later javascript rendition, perhaps look into practice projects by following along with videos. With those projects, try to make a rudimentary solution to 
                                        run when pressing a button perhaps and then move on to implementing features like time based running, easy editing of a single node (containing date, time, and 
                                        how long to run the motor), easy adding of nodes by asking for all of the pertinent information and then storing that data so that it can be used, and more. Once 
                                        all of these seem to work flawlessly and robustly, then I can move on to making it look nice and simply focus on that until I am satisfied and feel that I could 
                                        present it. Finally, after this, I can start recreating the javascript solution in Swift to create an iPhone app version.</li>
                                </ul>
                            </li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>03/27/2024:</p>Today I was able to accomplish and learn a lot about controlling a raspberry pi. Based on my 
                                contract made before beginning this project, I have now completed deliverables 1 and 2 which means should nothing else go right going forward, I will be able to present my 
                                findings and what I have developed and learned and then receive, at Dr. Soto's discretion, a C or B on the full project. This is a great step as I only have to figure out a 
                                solution to the javascript control in order to secure completion of deliverable 3. As for what I have completed, I was able to hook up the relay to the raspberry pi, add 
                                python3 to the pi, and run python code on the pi. I have also been able to control the GPIO pins on the pi and turn the motor based on the python code. This only allows for 
                                simple control, like turn on for x number of seconds, turn off for y number of seconds, and loop z number of times. However, this is a great stepping stone to controlling the 
                                motor live from a javascript page and then hopefully a swift app. I have been having trouble with nodeJS so far, however, I believe I will be able to solve my problems. If not, 
                                I may need to think of other solutions or perhaps bring the pi home with me in order to work on it at home without the need to go into school or worry about network issues.</li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>03/28/2024:</p>Today I learned more about WebSockets. They have been my major issue with nodeJS after having 
                                solved the comparability issues with imports, nodeJS itself, and npm. I also decided to bring the pi home and have now started to work on it at home. I don't have the need to 
                                work on it wirelessly so for now I won't focus my efforts on that. For now all I want to do is ensure that I get the WebSockets working. The javascript  and html is functioning 
                                since I am able to get signals when i check the box from the html and from the javascript. The one thing I can't seem to get is signals from the WebSockets trying to gain 
                                connection to one another. Going forward it will probably be a good idea to try to eliminate any extra variables and focus on just getting the WebSockets to work at a base level 
                                and build from there. If I'm unable to, then more research is needed.</li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>03/31/2024:</p>Today I was able to completely figure out and finalize the proof of concept JavaScript page. I now 
                                have a working on button that remains on when the user is pressing it, an off button that shuts it down, a checkmark that when checked will keep the motor on, an input that only 
                                accepts integers or float numbers as seconds the motor is to remain on, as well as a time that the motor should turn on an for how long at that time. Currently, due to the way 
                                that the WebSockets have been implemented, only one entry can be processed at a time reliably. It is technically possible to submit as many inputs as you wish, however, they may 
                                not interact how you assume it will.
                                <ul className='list-circle pl-20 max-md:pl-12'>
                                    <li>Next steps: From here, I need to figure out how I will solve the issue of input. I want to be able to create a system that can reliably and intuitively accept input for 
                                        two major options: Either you can begin by selecting a single day that you wish to make a feeding, the intention being that you are making a one off feeding for some point 
                                        in the future and here there should be an option to make the feeding immediately for a specific amount of time. Or there could be another starting point where you begin with 
                                        a day you wish to start a reoccurring feeding, with the main idea being that you select this option when you wish to setup specifically reoccurring feedings. The only 
                                        difference here should be the UI since each of those two options are only there to make creating feedings intuitive and easy. I also need to ensure they are done reliably 
                                        no matter the amount of tasks are added, as well as included error correction to ensure that tasks are done one at a time should overlap occur with a potential output that 
                                        notifies the user of this overlap.</li>
                                    <li>If latency is an issue, look into LORA modules</li>
                                </ul>
                            </li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>04/10/2024:</p>Today I learned a lot about React and TailwindCSS. I was able to develop (though with some minor kinks 
                                currently) the front end portion to my motor controller web app. I now need to figure out how to integrate WebSockets into my project so that the front end can output data which the 
                                backend will grab and put into a MySQL server. I also of course need to figure out the backend portion as well as the MySQL server itself.
                                <ul className='list-circle pl-20 max-md:pl-12'>
                                    <li>I need to add my current successful project rendition to GitHub using git so that I can keep track of versions.</li>
                                    <li>I need to work with my old proof of concept to see how inputting data can talk to the backend</li>
                                    <li>I need to create a MySQL server and run it on my pi so that I can keep track of data for feedings</li>
                                    <li>Eventually I need to write a documentation file so that, should there be a power outage or should the microSD card, motor, relay, or even the pi itself fail, I need to have a 
                                        detailed description of how to build the entire hardware system as well as how to flash a new os onto a new microSD card and then pull the entire project onto the pi, then how 
                                        to connect to the pi from a computer on the same network in order to start up the server and check the ip address (a number and not "raspberrypi.local"), and then if this 
                                        option is chosen and the ip address has changed then how to port forward the pi at the new ip address as well as how to point the public domain to that ip address.</li>
                                </ul>
                            </li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>04/11/2024:</p>Having now entered the sprint for all projects, I have begun to buckle down a lot on development. In this 
                                timespan I have edited the front end a bit and developed the backend out enough to add functionality to the adding a feeding button. Now I have error catching for incorrect date 
                                input and catching for input of recurrence interval. I also now have the ability to enter in information on if the feeding should start immediately, recurrence interval, run forever 
                                or not, start day, start time, end date, and amount of feed. When the submit button is pressed, the data is collected and checked and then sent to the backend. The backend then takes 
                                that data and inserts it as a single entry into the events table and creates the repeating events in the occurrences for each individual run per-day. This occurrences table will be 
                                used for calendar viewing. The events table can be used for removing a total event, as well as all occurrences of that event in the occurrences table.
                                <ul className='list-circle pl-20 max-md:pl-12'>
                                    <li>I need to add a functionality for the deletion button. Most likely the frontend will have a dropdown that allow for selection of all possible events currently scheduled. 
                                        Each event should be called from the backend that calls the MySQL server to select * from events. The data shown should be all of the data that a user would have input. I 
                                        will have to format the data for easy readability like dates and times.</li>
                                    <li>When an event is selected from the delete dropdown and then submitted to the backend, the backend should take the id from the selected element and then run a delete function 
                                        where an event has an id equivalent to the one gathered, joined with all records in occurrences table that have the same foreign key id.</li>
                                    <li>After both of these have been implemented correctly, I can now move on to getting the calendar viewing working. Each day should call to the backend and ask for a select 
                                        query to show all occurrences of an event where they are to run on the current date selected. Each should then be sent back to the frontend as a 2D array and then created 
                                        into a string that is to be output as a list under the scheduled feedings for the selected day. Detection will also be needed since there may be no created feedings for some 
                                        given day and thus if an empty array is returned and the No feedings scheduled should then be displayed.</li>
                                    <li>Finally, after all of the above is completed, the final element of this project's functionality needs to be completed: Making the GPIO pins turn the relay on and off. At this 
                                        point I can move all of my code to the pi and ensure that everything still works as it does currently. Then I need to figure out how to check every minute if an occurrence 
                                        record states that there should be a feeding now. If this returns true, we need to grab the amount of feed to be dispensed and then, as with the proof of concept, I need to 
                                        then tell the pi to output a signal to the correct pin to turn on the relay and thus turn on the motor. Once this finally functionality has been implemented correctly, I will 
                                        have completed the project (at least good enough for me).</li>
                                </ul>
                            </li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>04/18/2024:</p>I was able to add functionality of the delete button and now I just need to add the functionality of listing 
                                events when they are scheduled in the calendar. After implementing that functionality, the frontend will be complete and I can start just focusing on the backend functionality. I have 
                                been able to get the backend to work very well thus far since it has been able to talk to the front end, supplying information to and from the MySQL server. Now I just need to find a 
                                solution for detecting if there is an occurrence currently so that the pi knows when to open the relay and turn on the motor.
                                <ul className='list-circle pl-20 max-md:pl-12'>
                                    <li>I can check if there is an occurrence on the current date when the date changes (perhaps at midnight) and then detect if there is an occurrence each hour of that day. When the 
                                        hour exists we can check every minute until reaching the occurrence and then the GPIO pin can have a value output.</li>
                                    <li>Perhaps once GPIO output has been developed, it could be nice to implement an “LED” indicator in app so a user knows if the motor is on or off.</li>
                                    <li>Finally, I also need to develop a full project document that describes how everything works in detail. This does not need to dive into the code, however, it needs to be able to 
                                        describe all of the possible problems a person might have and go over how to fix it. Like if the pi were to suddenly die, it could be the micro sd. If it is the micro sd then how 
                                        is she to replace it? I will need to go over getting a new micro sd, how to download a new OS, how to download the full project, and then how to put this on the new sd card and 
                                        add it to the pi. I also need to describe how to access the pi through ssh or the TigerVNC viewer for desktop, to figure out how to restart the app. Basically, I just need to list 
                                        and describe how to fix anything that may break.</li>
                                </ul>
                            </li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>05/08/2024:</p>I was able to clean up a lot of functionality for the code including coding the two checkboxes manually 
                                rather than relying on a library to handle it. I also added functionality of the calendar to display the feedings scheduled on the day you select. I also added the core functionality 
                                for checking to determine if there are any occurrences of a scheduled feeding that should run the motor now or not. This is checked every minute and if an occurrence is found, the relay 
                                I switched on to allow the motor to be turned on and then switched off after the amount of feed (which is a time in seconds) has elapsed. This only leaves me with three more major tasks: 
                                Create the raspberry pi case, write a project manual, film and edit a project demonstration video.
                            </li>
                            <li><p className='text-primary text-lg max-md:text-base font-bold'>05/17/2024:</p>After months of work I have finally completed and turned in my project! There are still a number of bugs to 
                                iron out, including an error with how the input time is recorded so more work is obviously needed.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='max-2xl:h-40'>
                <div className="fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden">
                    <Link to='/Biosound'><LeftArrow/></Link>
                </div>
                <div className="fixed bottom-[50%] right-10 flex justify-between items-center p-4 max-2xl:hidden">
                    <Link to='/Server'><RightArrow/></Link>
                </div>
                <div className="hidden justify-center items-center p-4 space-x-10 max-2xl:flex">
                    <Link to='/Biosound'><LeftArrow/></Link>
                    <Link to='/Server'><RightArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default AutoChickFeed;
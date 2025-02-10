import React from 'react'
import nit from './nit.png'
import './Home.css'
import { Link } from 'react-router-dom'
import director from './director.png'

function Home() {
    return (
        <div className='body'>

            <div className='header'>
                <div className='logo'>
                    <img src={nit} alt="NIT" className='image' />
                </div>
                <div className='txt1'>Placement Cell NIT Uttarakhand</div>
                <div className='header1'>

                    <div className='site'>
                        <Link style={{ color: 'white' }} to="https://www.nituk.ac.in/" className='button'>Official Website</Link>
                    </div>


                </div>
            </div>

            <div class='homepage'>
                <div className='Overview'>
                    <div className='Overview1' >A one stop portal for Placements & Internships</div>

                    <div className='Overview2'>
                        <p>
                            Welcome to the recruitment website For NIT Uttarakhand.
                            NIT is India's foremost industrial leadership development institution.
                            Our graduates are a combination of rigorous thinking, hardwork and
                            fundamental stronghold. They are nurtured by the institute to strive for
                            excellence and deliver impact in their field of work. Let us begin...


                        </p>
                    </div>
                </div>
                <div className='signup'>
                    <div className='login1'><p className='login2'>
                        <Link style={{ color: 'white' }} to="/StudentLogin" className='button'>Student</Link>

                    </p> </div>
                    <div className='login1'><p className='login2'>
                        <Link style={{ color: 'white' }} to="/login" className='button'>Recruiter</Link>
                    </p></div>
                    <div className='login1'><p className='login2'>
                        <Link style={{ color: 'white' }} to="/AdminLogin" className='button'>Admin</Link>
                    </p></div>
                </div>
            </div>

            <div className='whyR'>
                <div className='why1'>Why NIT Uttarakhand</div>
                <div className='why2'>
                    <p>
                        Established in 2009, as an institute of national importance,
                        NIT Uttarakhand is recognized worldwide as a leader in the
                        field of research and education in engineering and sciences.
                        Our mission is to create an ambience in which new ideas and
                        creativity flourish. The motto of NIT Uttarakhand is to provide
                        learning blended with excellence, to create leaders of tomorrow.
                        The dynamic and constantly evolving academic program reflects
                        the institute's commitment to stay in tune with the expanding
                        frontiers of knowledge worldwide. Extracurricular activities are
                        also treated with equal importance towards overall development making
                        the students at NIT Uttarakhand fit to take on the challenges faced
                        in the competitive corporate world. Backed by the support of Alumni
                        in different sectors and guidance of esteemed professors,
                        we strive to offer highly nurturing environment to all its students.
                    </p>
                </div>
                <div className='wh'>
                    <div className='why3'>
                        <div className='why31'>Alumni</div>
                        <div><p>
                            Our Alumni have emerged successful and excelled in varied professions
                            across the globe. This network is highly enriching for the growth of our community.
                        </p></div>

                    </div>
                    <div className='why32'>
                        <div className='why31'>Rankings</div>
                        <div><p>
                            Recognized as India’s No. 1 University, we strive for excellence.
                            Our rankings are reflective of our steep progress.
                        </p></div>
                        
                    </div>
                </div>
                <div className='wh'>
                    <div className='why3'>
                        <div className='why31'>Admission Process</div>
                        <div><p>
                            All the students enrolled at IIT Bombay are selected after rigorous
                            screening process. It ensures that we nurture India’s few most brilliant minds.

                        </p></div>

                    </div>
                    <div className='why32'>
                        <div className='why31'>All Round Development</div>
                        <div><p>
                            One’s skills, aptitude and perception reflect the personality of an individual.
                            We offer numerous opportunities for multi dimensional growth of an individual.
                        </p></div>
                    </div>
                </div>
            </div>
            <div className='d'>
                <div className='d1'>Director's Message</div>
                <div>

                    <div> <div className='imglh'><img src={director} alt="director" className='imageSl' /></div></div>
                    <div className='d2'>Established in 2009 under the Act of Parliament by the Ministry of Education, NITUK is a burgeoning institute of national importance, situated in the state of Uttarakhand (known as Devbhumi) amidst the serene and magnificent Himalayas. The impeccable geographical location endows natural advantage to the institution and boosts leaning, which is greatly reflected in the institute’s excellent teaching- learning ambience, young and dedicated faculty, and significant contribution to research work and commitment to the community.
                    </div>
                    <div className='d3'>Prof. Lalit Kumar Awasthi</div>
                    <div className='d4'>Director </div>
                    <div className='d5'>Vision</div>
                    <div className='d6'>To provide a global impetus to education and innovation for sustainable development of industry and society.</div>
                    <div className='d5'>Mission</div>
                    <div className='d6'>To provide an encouraging environment for education and training of technical professionals. To establish as a centre of excellence for research on challenges and demands of future generations. To promote innovation and leadership skills for producing competent professionals. To develop research collaborations with institutions of repute.</div>
                    </div>
            </div>
            <div className='Contact'>
                <div className='contact2'>Contact Us</div>
                <div>
                    Email: placement.cell@nituk.ac.in
                </div>
                <div>
                    Contact Number: 1234567890
                </div>
            </div>
            <div className='footer'>
                <div>@NIT Uttarakhand</div>
            </div>

        </div>

    )
}

export default Home
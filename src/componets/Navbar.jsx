import React from 'react'
import Button from 'react-bootstrap/Button';
import { MdArrowRight } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FaPinterest } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <div className='bg-[white] font-bold  text-3xl h-[30px]'>
        <div>
          <img src="https://www.signature-ideas.com/s/sig/index.php?name=shazia-&f=151" width={"150px"} className='ml-[40px] mt-[10px]'></img>
        </div>
        <div className='ml-[600px] mt-[-60px] '>
          <Button variant="">Home</Button>
          <Button className='ml-[10px]' variant="">About</Button>
          <Button className='ml-[10px]' variant="">Contact</Button>
          <Button className='ml-[10px]' variant="">Service</Button>
          <Button className='ml-[80%] mt-[-90px]' variant="outline-warning">GIFT FINDER</Button>{' '}
        </div>
      </div>
      <div className='bg-[#f0ecec] pb-[16%]'>
        <div className='ml-[400px] mt-[70px] '>
          <div className='ml-[-150px]'>
            <h1 className='pt-[90px]'>Find a gift for<br /> your wife or <br />girlfriend</h1>
            <p className='mt-[30px]'>
              Struggling to find a gift for your wife or <br />
              girlfriend? No problem!<br />
            </p>
            <Button className=' mt-[20px] ' variant="warning">FIND GIFT NOW</Button>{' '}
          </div>
          <div className='ml-[30%] mt-[-387px]'>
            <img src="https://i.pinimg.com/736x/c8/db/a1/c8dba1d329a39422b485bf957f750e1b.jpg" width={"800px"} ></img>
          </div>
        </div>
        <div className='ml-[px] '>
          <img src="https://thumbs.dreamstime.com/b/thank-you-card-design-vector-illustration-gold-lettering-quote-amd-flowers-black-background-thank-you-card-design-vector-131627031.jpg" width={"730px"} ></img>
          <div className='ml-[60%] mt-[-500px]'>
            <h1>How we work</h1>
            <p>
              we've actually already asked hundreds of <br />
              women what they want , and made a data<br />base with the results.All you have to do is<br /> take our short survey that only takes seco<br />nds, and our
              proprietary algorithm will ma<br />tch you with a few perfect gift options.
            </p>
            <Button className='mt-[10px]' variant="outline-warning">LEARN MORE</Button>{' '}
          </div>
        </div>
      </div>
      <div className="nnn" >
        <h2 className="rr" style={{ textAlign: "center", paddingTop: "40px" }}>Gift for all Occasions</h2>
        <p className='rr' style={{ textAlign: "center" }}>"Try web app to find the best gift for all Occasions"</p>
        <div className='yyy' style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1maJWNKoZaXi4qzjv63s1hNZBGdV3TruSNw&s " height={"00px"} />
            <Card.Body>
              <Card.Title>Birthday</Card.Title>
              <h5 className='pt-[20px] flex'> See More  <MdArrowRight className='mt-[4px]' /> </h5>
            </Card.Body>
          </Card>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://static-01.daraz.pk/p/cd43426a9c81405a989f39715e9f0c24.jpg" />
              <Card.Body>
                <Card.Title>Anniversary</Card.Title>
                <h5 className='pt-[20px] flex'> See More <MdArrowRight className='mt-[4px]' /></h5>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxa-_I22eazBdrm39gZFk4rm4XPossIGFopQ&s " height={"00px"} />
              <Card.Body>
                <Card.Title>Valentine's Day</Card.Title>
                <h5 className='pt-[20px] flex '> See More <MdArrowRight className='mt-[4px]' /></h5>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIqUX-U8zVzXM-BcGCdozDe-guzz6E3g9rqG4bmK2-Xa7TwKvBSZw_VGqeFD9Oh0zyuY&usqp=CAU" height={"00px"} />
              <Card.Body>
                <Card.Title>Christmas</Card.Title>
                <h5 className='pt-[20px] flex'> See More<MdArrowRight className='mt-[4px]' /> </h5>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className='bg-[orange] h-[150px] '>
        <h3 className='pt-[40px] ml-[250px]'>Ready to get started?</h3>
        <p className='text-[27px] ml-[250px] mt-[-10px]'>
          Sign up or contact us
        </p>
        <div className='ml-[1000px] mt-[-70px] '>
          <Button variant="dark">FIND GIFT NOW</Button>
          <Button className='ml-[10px]' variant="outline-dark">HOW IT WORKS</Button>
        </div>
      </div>
      <div className='text-center mt-[50px]'>
        <h3>Our Best Blogs Ever</h3>
        <p>"Try our blog to find the best tips and tricks to select your gift"</p>
      </div>
      <div className='bg-[black] w-[1100px] ml-[220px] h-[230px]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6kig5IKj9mPRd4zvmCDNYaafjVO2--JuWg&s" width={"412px"}></img>
        <div className='ml-[500px] mt-[-200px] text-white'>
          <p>
            Mr.John Doe
          </p>
          <h3>The best way to wish <br /> your wife</h3>
          <p className='mt-[30px]'>Read More</p>
        </div>
      </div>
      <div className="ooo" style={{ display: "flex" }}>
        <div className="uuu" style={{ marginLeft: '400px' }}>
          <h4>Database to find the gifts for you  girlfriend</h4>
          <p>
            Lorem ipsum dolor sit amet , consectetur<br /> elit,
            sed do eiusmod tempor incididunt ut labore et dolore..
            <h5 className='mt-[50px]'>Read More</h5>
          </p>
        </div>
        <div className="uuu" style={{ marginLeft: "20px" }}>
          <h4>How to Artificial Intelligence read your mind to find the best gift</h4>
          <p>
            Lorem ipsum dolor sit amet , consectetur<br /> elit,
            sed do eiusmod tempor incididunt ut labore et dolore..
            <h5 className='mt-[20px]'>Read More</h5>
          </p>
        </div>
      </div>
      <div className='bbb'>
        <h5>Home</h5>
        <h5>About</h5>
        <img src="https://t3.ftcdn.net/jpg/04/95/39/00/360_F_495390052_J1Bc8V9CsyxtlrM2UFjRvhXb4gbqoM73.jpg" width={"100px"} className='mt-[-25px]'></img>
        <h5>Service</h5>
        <h5>Blog </h5>
      </div>
      <hr style={{ width: "100%", color: " black" }} />
      <div className='rrr'>
        <FaFacebook />
        <AiFillTwitterCircle />
        <SiYoutubemusic />
        <FaPinterest />
      </div>
      <p className='ml-[42%] mt-[30px]'> ⓒ2010 - 2020 Privacy - Terms</p>
    </div>
  )
}
export default Navbar

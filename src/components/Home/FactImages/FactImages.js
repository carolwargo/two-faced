import React from "react";
import {motion} from "framer-motion";
import Facts1 from "../../../assets/images/Facts1.png";
import Facts2 from "../../../assets/images/Facts2.png";
import Facts3 from "../../../assets/images/Facts3.png";


        export default function FactImages() {
                    return (
                        <>
                            <motion.div
                                className="box"
                                whileHover={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            >
                                <motion.div>
                                <img src={Facts1} alt="fact-pic1" style={{ width: '100%', padding:"2rem", boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.5)" }} />
                                    </motion.div>
                                <motion.div>
                                <img src={Facts2} alt="fact-pic2" style={{ width: '100%' , padding:"2rem", boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.5)"}} />
                                </motion.div>
                                <motion.div>
                                <img src={Facts3} alt= "fact-pic3" style={{ width: '100%', padding:"2rem", boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.5)" }}></img>
                            </motion.div>
                            </motion.div>
                        </>
                    );
                }

import { Grid, Flex, Text, GridItem } from "@chakra-ui/react";
import { useState,useEffect  } from "react";
import { ReactComponent as X } from "./assets/X.svg";
import { ReactComponent as O } from "./assets/O.svg";


function App() {
  
  const [xoArr, setXoArr] = useState(Array(9).fill(""))
  const [xo, setXo] = useState("x")
  const [winner, setWinner] = useState()

  const handleClick = (num) => {
    // const tempArr = [...xoArr]
    // tempArr[num] = xo
    if (xo === "x") {
      setXo("o")
    } else {
      setXo("x")
    }
  
  }


/*   const checkWinner = () => {
     const x = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < x.length; i++) {
      const [a, b, c] = x[i];
      if (xoArr[a] && xoArr[a] == xoArr[b] && xoArr[a] == xoArr[c]) {
        setWinner(xo == "x" ? "o" : "x")
      }
    }
  } */

  const GridItems = (num) => {
    return (
      <GridItem cursor={"pointer"} onClick={handleClick(num)}>
        <Flex justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"} border={"1px"} borderRadius={2} shadow={"xl"} padding={10}>
          {xo}
        </Flex>
      </GridItem>
    );
  };

  return (
    <Flex direction={"column"} justifyContent={"center"} height={"100vh"} width={"100vw"} alignItems={"center"}>
      <Text as={"b"} fontSize={"6xl"} color={"black"}>XOX</Text>
      <Grid templateRows={'repeat(3,1fr)'} templateColumns={'repeat(3,1fr)'} gap={4} h={450} w={450} >
        <GridItems num={0}></GridItems>
        <GridItems num={1}></GridItems>
        <GridItems num={2}></GridItems>
        <GridItems num={3}></GridItems>
        <GridItems num={4}></GridItems>
        <GridItems num={5}></GridItems>
        <GridItems num={6}></GridItems>
        <GridItems num={7}></GridItems>
        <GridItems num={8}></GridItems>
      </Grid>
    </Flex>
  );
}

export default App;

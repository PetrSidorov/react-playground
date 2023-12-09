// @ts-nocheck
const add = (a: number, b: number) => a + b;
const add2 = (a: number) => (b: number) => a + b;
const addOne = add2(1);
// currying | partial application
// fp-ts

function Component() {
  function handleLike(event, commentId) {
    //
  }

  function handleLike(commentId) {
    // return (event) {
    //     //
    // }
  }
}

//     const smth = event => handleLike(event, comment.id)

//     return <ul>
//         <button onClick={something} onClick={() => something(efefefef)}
//             onClick={e => {
//                     e.preventDefault();
//                     something();
//                     dispatch({ type: "like"< ... })
//             }}
//         ></button>

//         {comments.map(comment => (
//             <li>
//               <button onClick={smth}>Like</button>
//               <button onClick={handleLike(comment.id)}>Like</button>
//             </li>
//         ))}
//     </ul>
// }

// counter = 0 | 2 |

// function handleClick() {
//   setTimeout(() => setState(counter => counter + 1));
// }

useEffect(() => {
  const interval = setTInterval(() => {
    setCounter((counter) => counter + 1);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);

// counter = 0

// function handleClick() {
//   setState(2);
//   setSTate(prev => prev  + 2);
//   setSTate(prev => prev  + 2);
// }

// const smth = ()

// onClick={smth}

const addTwo = add.bind(null, 2);

const containsWord = (word: string) => (sentence: string) =>
  sentence.includes(word);

const containsMoscow = containsWord("Moscow");
const containsArtyom = containsWord("Artyom");

const sentence = "Artyom is from Moscow";

if (containsMoscow(sentence) && containsArtyom(sentence)) {
  //
}

const isRole = (role: Role) => (user: Pick<User, "role">) => user.role == role;
export const isAdmin = isRole(Role.ADMIN);
export const isTeacher = isRole(Role.TEACHER);
export const isStudent = isRole(Role.STUDENT);

// function isAdmin(user) {
//     return user.role == Role.ADMIN;
// }

// function isTeacher(user) {
//     return user.role == Role.TEACHER;
// }

// function isStudent(user) {
//     return user.role == Role.STUDENT;
// }

// {isAdmin(user) ? (

// )}

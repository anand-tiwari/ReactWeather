var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//     render: function(){
//       return (
//         <h3>Examples component</h3>
//       );
//     }
// });
var Examples = (props) => {
  return (
    <div>
      <h3 className="text-center">Examples component</h3>
      <p>Here are few examples to try out :</p>
      <ol>
        <li>
          <Link to='/?location=Philodelphia'>Philodelphia,PA</Link>
        </li>
        <li>
          <Link to='/?location=Garhwa'>Garhwa</Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Examples;

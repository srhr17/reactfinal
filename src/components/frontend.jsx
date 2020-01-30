import React, { Component } from "react";
class frontend extends Component {
  state = {
    name: "",
    email: "",
    contact: null,
    fieldofinterest: "",
    acheivements: "",
    projects: "",
    cgpa: ""
  };

  nameChanged = event => {
    this.setState({ name: event.target.value });
  };
  cgpaChanged = event => {
    this.setState({ cgpa: event.target.value });
  };
  emailChanged = event => {
    this.setState({ email: event.target.value });
  };
  contactChanged = event => {
    this.setState({ contact: event.target.value });
  };
  fieldofinterestChanged = event => {
    this.setState({ fieldofinterest: event.target.value });
  };
  acheivementsChanged = event => {
    this.setState({ acheivements: event.target.value });
  };
  Submitted = () => {
    if (this.state.name.length === 0) {
      alert("Check NAME");
    }
    if (this.state.cgpa === "" || this.state.cgpa > 10) {
      alert("Check CGPA");
    }
    if (this.state.email === "") {
      alert("Check E-MAIL");
    }
    if (this.state.contact === "") {
      alert("Check CONTACT");
    }
    if (this.state.fieldofinterest === "") {
      alert("Check Field Of Interest");
    }
    if (this.state.acheivements === "") {
      alert("Check Acheivements");
    }
  };

  newMethod() {
    let classes = "alert alert-";
    classes += this.state.name === "" ? "warning" : "primary";
    return classes;
  }

  formatName() {
    const name = this.state.name;
    return name === "" ? "  Please Enter Something" : name;
  }

  formatCGPA() {
    const CGPA = this.state.cgpa;
    return CGPA === "" ? "  Please Enter Something" : CGPA;
  }
  formatemail() {
    const email = this.state.email;
    return email === "" ? "  Please Enter Something" : email;
  }
  formatcontact() {
    const contact = this.state.contact;
    return contact === null ? "  Please Enter Something" : contact;
  }
  formatfieldofinterest() {
    const fieldofinterest = this.state.fieldofinterest;
    return fieldofinterest === ""
      ? "  Please Enter Something"
      : fieldofinterest;
  }
  formatacheivements() {
    const acheivements = this.state.acheivements;
    return acheivements === "" ? "  Please Enter Something" : acheivements;
  }
  newmthod1() {
    let classes = "alert alert-";
    classes += this.state.name === "" ? "warning" : "primary";
    return classes;
  }

  newmthod2() {
    let classes = "alert alert-";
    classes += this.state.cgpa === "" ? "warning" : "primary";
    return classes;
  }

  newmethod3() {
    let classes = "alert alert-";
    classes += this.state.email === "" ? "warning" : "primary";
    return classes;
  }
  newmethod4() {
    let classes = "alert alert-";
    classes += this.state.contact === null ? "warning" : "primary";
    return classes;
  }
  newmthod5() {
    let classes = "alert alert-";
    classes += this.state.fieldofinterest === "" ? "warning" : "primary";
    return classes;
  }

  newmthod6() {
    let classes = "alert alert-";
    classes += this.state.acheivements === "" ? "warning" : "primary";
    return classes;
  }

  changemethod1() {
    let classes = "alert alert-";
    classes += this.state.name === "" ? "danger" : "primary";
    return classes;
  }
  changemethod2() {
    let classes = "alert alert-";
    classes += this.state.cgpa === "" ? "danger" : "primary";
    return classes;
  }
  changemethod3() {
    let classes = "alert alert-";
    classes += this.state.email === "" ? "danger" : "primary";
    return classes;
  }
  changemethod4() {
    let classes = "alert alert-";
    classes += this.state.contact === null ? "danger" : "primary";
    return classes;
  }
  changemethod5() {
    let classes = "alert alert-";
    classes += this.state.fieldofinterest === "" ? "danger" : "primary";
    return classes;
  }
  changemethod6() {
    let classes = "alert alert-";
    classes += this.state.acheivements === "" ? "danger" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend style={{ marginLeft: "750px" }}> Resume</legend>
          <form method="POST" action="http://localhost:8000/">
            <table>
              <h1 style={{ marginLeft: "550px" }} className={this.newmthod1()}>
                Name
              </h1>
              <input
                type="text"
                placeholder="Please Enter Your Name"
                style={{
                  marginLeft: "550px",
                  textEmphasisColor: "grey",
                  width: "500px"
                }}
                name="name"
                onChange={this.nameChanged}
                className={this.changemethod1()}
              />
              <span>{this.formatName()}</span>
              <br />
              <br />
              <h1 style={{ marginLeft: "550px" }} className={this.newmthod2()}>
                CGPA
              </h1>
              <input
                type="number"
                placeholder="Please Enter Your CGPA out of 10"
                style={{
                  marginLeft: "550px",
                  textEmphasisColor: "grey",
                  width: "500px"
                }}
                name="cgpa"
                onChange={this.cgpaChanged}
                className={this.changemethod2()}
              />
              <span>{this.formatCGPA()}</span>
              <br />
              <br />
              <h1 style={{ marginLeft: "550px" }} className={this.newmethod3()}>
                E - mail
              </h1>
              <input
                type="email"
                placeholder="Please Enter Your e-mail"
                style={{
                  marginLeft: "550px",
                  textEmphasisColor: "grey",
                  width: "500px"
                }}
                name="email"
                onChange={this.emailChanged}
                className={this.changemethod3()}
              />

              <span>{this.formatemail()}</span>
              <br />
              <br />
              <h1 style={{ marginLeft: "550px" }} className={this.newmethod4()}>
                Contact
              </h1>
              <input
                type="number"
                placeholder="Please Enter Your Contact"
                style={{
                  marginLeft: "550px",
                  textEmphasisColor: "grey",
                  width: "500px"
                }}
                name="contact"
                onChange={this.contactChanged}
                className={this.changemethod4()}
              />

              <span>{this.formatcontact()}</span>
              <br />
              <br />
              <h1 style={{ marginLeft: "550px" }} className={this.newmthod5()}>
                Field of Interest
              </h1>
              <input
                type="text"
                placeholder="Please Enter Your Field of Interest"
                style={{
                  marginLeft: "550px",
                  textEmphasisColor: "grey",
                  width: "500px"
                }}
                name="fieldofinterest"
                onChange={this.fieldofinterestChanged}
                className={this.changemethod5()}
              />

              <span>{this.formatfieldofinterest()}</span>
              <br />
              <br />
              <h1 style={{ marginLeft: "550px" }} className={this.newmthod6()}>
                Acheivements
              </h1>
              <input
                type="text"
                placeholder="Please Enter Your Acheivements"
                style={{
                  marginLeft: "550px",
                  textEmphasisColor: "grey",
                  width: "500px"
                }}
                name="acheivements"
                onChange={this.acheivementsChanged}
                className={this.changemethod6()}
              />

              <span>{this.formatacheivements()}</span>
              <br />
              <br />
              <input
                type="submit"
                style={{ marginLeft: "590px", textEmphasisColor: "grey" }}
                onClick={this.Submitted}
                className="progress-bar m-100"
              />
            </table>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default frontend;

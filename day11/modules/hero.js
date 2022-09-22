import person from "./person.js"

 class Hero extends person{
    title = "default tirle";  
    firstname = "default fname";             //-> public
    lastname = "default lname";
    #mission = "my secret mission";          //# -> private 
    static version = 3000;
    constructor (htitle, hfname, hlname,xyz){    //-> Constructor
        super(xyz)
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;           
    }

    fullName(){                              //-> method
        return this.firstname+" "+this.lastname; 
    }
    static power(){                          //->static
        return 8
    }
    get mission(){                           //get'er
        return this.#mission
    }
    set mission(mission){                    //set'er
        this.#mission = mission;
    }
};


export default Hero
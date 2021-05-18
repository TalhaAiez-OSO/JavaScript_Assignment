class Tool {
  constructor(strength, type){
    this.strength = strength;
    this.type = type;
  }
  setStrength(strength) { this.strength = strength; }
}

class Scissors extends Tool {
  constructor(strength){
    super(strength, "s");
  }

  getType() { return this.type; }
  getStrength() { return this.strength; }

  fight(tool){
    const currToolStrength = (this_tool_Strength, tool) => {
      if(tool.getType() == "r")
        return this_tool_Strength / 2;
      else if(tool.getType() == "s")
        return this_tool_Strength;
      else if(tool.getType() == "p")
        return this_tool_Strength * 2;
    }

    if(currToolStrength(this.strength, tool) > tool.getStrength() )
      return `${this.type} wins againsts ${tool.getType()} in strength`;
    else if(currToolStrength(this.strength, tool) < tool.getStrength())
      return `${this.type} looses againsts ${tool.getType()} in strength`;
    else if(currToolStrength(this.strength, tool) === tool.getStrength())
      return `${this.type} ties againsts ${tool.getType()} in strength`;
  }
}

class Paper extends Tool {
  constructor(strength){
    super(strength, "p");
  }

  getType() { return this.type; }
  getStrength() { return this.strength; }

  fight(tool){
    const currToolStrength = (this_tool_Strength, tool) => {
      if(tool.getType() == "r")
        return this_tool_Strength * 2;
      else if(tool.getType() == "s")
        return this_tool_Strength / 2;
      else if(tool.getType() == "p")
        return this_tool_Strength;
    }

    if(currToolStrength(this.strength, tool) > tool.getStrength() )
      return `${this.type} wins againsts ${tool.getType()} in strength`;
    else if(currToolStrength(this.strength, tool) < tool.getStrength())
      return `${this.type} looses againsts ${tool.getType()} in strength`;
    else if(currToolStrength(this.strength, tool) === tool.getStrength())
      return `${this.type} ties againsts ${tool.getType()} in strength`;
  }
}

class Rock extends Tool {
  constructor(strength){
    super(strength, "r");
  }

  getType() { return this.type; }
  getStrength() { return this.strength; }

  fight(tool){
    const currToolStrength = (this_tool_Strength, tool) => {
      if(tool.getType() == "r")
        return this_tool_Strength;
      else if(tool.getType() == "s")
        return this_tool_Strength * 2;
      else if(tool.getType() == "p")
        return this_tool_Strength / 2;
    }

    if(currToolStrength(this.strength, tool) > tool.getStrength() )
      return `${this.type} wins againsts ${tool.getType()} in strength`;
    else if(currToolStrength(this.strength, tool) < tool.getStrength())
      return `${this.type} looses againsts ${tool.getType()} in strength`;
    else if(currToolStrength(this.strength, tool) === tool.getStrength())
      return `${this.type} ties againsts ${tool.getType()} in strength`;
  }
}


export default main;
function main() {
  const scissors = new Scissors(5);
  const paper = new Paper(7);
  const rock = new Rock(15);

  print(`${scissors.fight(paper)}, ${paper.fight(scissors)}`);
  print(`${paper.fight(rock)}, ${rock.fight(paper)}`);
  print(`${rock.fight(scissors)}, ${scissors.fight(rock)}`);
}
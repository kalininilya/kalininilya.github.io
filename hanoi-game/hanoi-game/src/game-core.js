function Game(towers) {
  this.towers = [[1, 2, 3], [], []];
  this.history = [];
}

Game.prototype.isValidTower = function(tower) {
  for (let i = 0; i < tower.length - 1; i++) {
    if (tower[i] > tower[i + 1]) return false;
  }
  return true;
};

Game.prototype.isValidTowersAll = function(towers) {
  for (let i = 0; i < towers.length; i++) {
    if (!this.isValidTower(towers[i])) return false;
  }
  return true;
};

Game.prototype.makeMove = function(currentTowerIndex, nextTowerIndex) {
  let item = null;
  let newTowers = [];

  for (let key in this.towers) {
    newTowers[key] = this.towers[key].slice();
  }
  for (let key in newTowers[currentTowerIndex]) {
    item = newTowers[currentTowerIndex].shift();
    break;
  }
  if (item === null) {
    throw { message: "Invalid move!", towers: this.towers };
  }
  newTowers[nextTowerIndex].unshift(item);
  if (this.isValidTowersAll(newTowers)) {
    this.towers = newTowers.concat();
    this.isFinished();
    return [currentTowerIndex, nextTowerIndex];
  } else {
    throw { message: "Invalid move!", towers: this.towers };
  }
};

Game.prototype.isFinished = function() {
  let towersCounter = 0;
  for (key in this.towers) {
    if (key === 0 && this.towers[key].length !== 0) return false;
    if (this.towers[key].length !== 0) towersCounter++;
  }
  if (towersCounter > 1) return false;
  return true;
};

Game.prototype.solve = function(
  n,
  currentTowerIndex,
  nextTowerIndex,
  tempTower
) {
  if (n == 0) return;
  this.solve(n - 1, currentTowerIndex, tempTower, nextTowerIndex);
  let move = [currentTowerIndex, nextTowerIndex];
  this.history.push(move);

  this.solve(n - 1, tempTower, nextTowerIndex, currentTowerIndex);
};

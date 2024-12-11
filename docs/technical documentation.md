

# Project: Platformer Game; GOOBERS


Klik [hier](./game/) om onze game te spelen


## Overview

This project is a simple 2D platformer using p5.js. The code manages a player character who can move, jump, and interact with platforms and collectible items.
It demonstrates basic concepts of movement, gravity, collision detection, and item pickup.

You are (the player) a Goober(goblin) who fell into a cave together with his brothers and sisters, now you have to make your way up and find your family so you can all face together whats waiting above.
as you get higher up you notice that the creatures that are down here go from cute and nice, to unsettling and eventually outright creepy, what is going on? 

![Concept of a goober](docs/images/readme/goober.png "Goober concept art")

### Coordinate System

- The game's coordinate system starts at the top-left corner of the canvas.
- Increasing `x` moves to the right.
- Increasing `y` moves down.
- This code uses `createCanvas(canvasWidth, canvasHeight)` to set the drawing area.

### Player Movement & Gravity

- **Horizontal Movement:** Controlled by arrow keys (left/right) or WASD. The player’s `x` position changes directly based on `playerSpeed`.
- **Vertical Movement (Jumping/Gravity):** 
  - The player has a `playerVelocity` representing vertical movement.
  - Pressing jump (UP arrow or space) sets `playerVelocity` to a positive value, causing the player to move upward (since `y` decreases when `playerVelocity` is positive and applied as `y -= playerVelocity`).
  - Gravity reduces `playerVelocity` each frame, making the player fall down (once `playerVelocity` becomes zero or negative).
- **Grounded & Jumping States:** 
  - `isJumping` and `isGrounded` flags indicate whether the player is in the air or on a platform.
  - The `jumpCount` and `maxJump` variables limit how many times the player can jump without landing.

### Collision Detection

- The `Collision` class provides static methods for collision handling:
  - **`handleCollisions(entity, platforms)`**: Main collision detection. Calls vertical, horizontal, ground, and wall collision checks.
  - **`verticalCollision(entity, platforms, nextY, vy)`**: Checks Vertical movement against platform boundaries. Prevents passing through platforms Verticaly.
  - **`horizontalCollision(entity, platforms, nextX, vx)`**: Checks horizontal movement against platform boundaries. Prevents passing through platforms horizontally.
  - **`groundCollision(entity)`**: Ensures the entity doesn't fall below the bottom of the canvas.
  - **`wallCollision(entity)`**: Prevents the entity from going beyond the left and right canvas edges.
  - **`isColliding(x1, y1, width1, height1, obj)`**: Basic rectangle-rectangle collision detection function.
  - **`entityCollision(entity1, entity2)`**: Checks if two entities overlap.

Because all collision methods are static, you can call them without creating an instance of the `Collision` class. the original Collsion logic was supposed to work with vectors, but we scraped that for now.


### Platforms

- Each `Platform` is defined by `x, y, width, height`.
- Platforms are drawn as rectangles on the canvas.
- The player stands on top of platforms if they land from above, and collides if jumping into them from below.

### Items (Collectibles)

- Items (instances of `Item`) have `x, y, width, height` and can be collected by the player.
- `entityCollision(player, item)` checks if the player overlaps with the item.
- When picked up, `isPickedUp` is set to `true`, and the item shrinks over time until it effectively disappears.
- Items also animate (floating effect) when not picked up, using `sin()` to change the `y` position slightly.
- Also made it so that the `x` and `y` postition get adjusted while shrinking, so that it shrinks towards the middle instead of to the corner.

```js
 if (this.isPickedUp && (this.width && this.height) > 0) {
            this.width -= 1
            this.height -= 1

            //keep shrink to the center
            this.x += 0.5
            this.y += 0.5
			} 
```

### Entity Base Class

- `Entity` is a parent class providing `isAlive` and `health` properties.
- `Player` extends `Entity` and uses its `update()` method to call the movement, gravity, collisions, and rendering logic each frame.
-  This makes future expansion easier (e.g., enemies or different entity types).

### Game Loop

- **`draw()`**: p5.js calls this function every frame.
- Inside `draw()`:
  - The background is drawn.
  - Player `update()` and collision checks are performed.
  - Platforms and items are updated and rendered.
- `update()` methods are responsible for processing input, applying physics, checking collisions, and rendering entities.

### Input Handling

- Key presses are detected with `keyIsDown()`.
- Jump release is detected in `keyReleased()`, allowing the player to perform variable jump heights.

## File Structure & Workflow

- **`setup()`**: Initializes the canvas, creates player, platforms, and items.
- **`draw()`**: The main game loop. Redraws the background, updates and renders the player and other entities, and checks collisions continuously.
- **`preload()`**: Loads fonts and images before setup to ensure assets are ready.

## Recommended Improvements

- **Rename `playerVelocity` to `verticalVelocity`**: To clarify that it just has to do with the vertical Velocity
- **Introduce Horizontal Velocity**: Instead of directly modifying `this.x` in `move()`, a name like `horizontalVelocity`, might work better with the collision logic.
- **Refactor Method Names**: For clarity, rename `applyGravity()` to `updateVerticalMovement()` or something similar with Vertical to avoid confusion.
- **Use Classes and Instances More Consistently**: For future complexity, consider using non-static methods and pass references to `platforms` and `items`, or maintain a global game state object but we have to make sure it doesnt entangle our code to much.

## Current Conclusion

This code sets up a strong foundation for a platformer, and more complex gameplay features that we've planned to add.

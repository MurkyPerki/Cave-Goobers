
class Collision { 

    // //! all entities need to have 'x', 'y', 'width', 'height'

        static handleCollisions(entity, platforms) {
            
            let vy = 0;
            let vx = 0;
    
    
            if (typeof entity.playerVelocity !== 'undefined') {  //typeof
                vy = -entity.playerVelocity;
            }
        
    
            entity.isGrounded = false;
    
            const nextX = entity.x + vx;
            const nextY = entity.y + vy;
    
            Collision.verticalCollision(entity, platforms, nextY, vy);
            Collision.horizontalCollision(entity, platforms, nextX, vx);
            //Collision.groundCollision(entity);
            Collision.wallCollision(entity);
        }
    
    
        static verticalCollision(entity, platforms, nextY, vy) {
            for (const platform of platforms) {
                if (Collision.isColliding(entity.x, nextY, entity.width, entity.height, platform)) {
                    if (vy >= 0) {
                        // Collision from above (falling down onto platform)
                        entity.y = platform.y - entity.height;
                        entity.isGrounded = true;
                        entity.isJumping = false;
                        entity.playerVelocity = 0;
                    } else {
                        // Collision from below (jumping up into platform)
                        entity.y = platform.y + platform.height;
                        entity.playerVelocity = 0;
                    }
                 
                    break;
                }
            }
        }
    
        static horizontalCollision(entity, platforms, nextX, vx) {
            for (const platform of platforms) {
                if (Collision.isColliding(nextX, entity.y, entity.width, entity.height, platform)) {
                    if (vx > 0) {
                        // Collision moving right
                        entity.x = platform.x - entity.width;
                    } else if (vx < 0) {
                        // Collision moving left
                        entity.x = platform.x + platform.width;
                    }
                  
                    break;
                }
            }
        }
    
        // static groundCollision(entity) {
        //     if (entity.y + entity.height >= canvasHeight) {
        //         entity.y = canvasHeight - entity.height;
        //         entity.isGrounded = true;
        //         entity.isJumping = false;
        //         // No direct velocity to reset, but you can reset playerVelocity in the player if needed.
        //     }
        // }


        static wallCollision(entity) {
            //collision right
            if (entity.x + entity.width >= canvasWidth) {
                entity.x = canvasWidth - entity.width; 
            }
             //collision left
            if (entity.x <= 0) {
                entity.x = 0; 
            }
        }
    
        static isColliding(x1, y1, width1, height1, obj) {
            return (
                x1 < obj.x + obj.width &&
                x1 + width1 > obj.x &&
                y1 < obj.y + obj.height &&
                y1 + height1 > obj.y
            );
        }
    
        static entityCollision(entity1, entity2) {
            return (
                entity1.x < entity2.x + entity2.width &&
                entity1.x + entity1.width > entity2.x &&
                entity1.y < entity2.y + entity2.height &&
                entity1.y + entity1.height > entity2.y
            );
        }
    }
    
    

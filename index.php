
<?php 

include "db.php";

?>

<?php 
    foreach ($albums as $disco => $info) { ?>
        <div><?= $disco ?></div>
        <?php
        foreach ($info as $title => $infoTitle) { ?>
            <div><?= $title ?></div>
            <div><?= $infoTitle ?></div>
            <?php
        }
    }
    ?> 

    
   

console.log( "hotel13" );

    //:ITS_WRONG_CARL:===================================://
    
        const  ITS_WRONG_CARL = "[ITS_WRONG_CARL]"
        ////
        ,   d_hotel13_r13_rgx = "[FIX:d_hotel13_r13_g_x]"  
        ,   d_hotel13_r13_rgy = "[FIX:d_hotel13_r13_g_y]"  
        ////                                                 
        ,   d_hotel13_rid_rgx = "[FIX:d_hotel13_r13_g_x]"  
        ,   d_hotel13_rid_rgy = "[FIX:d_hotel13_r13_g_y]"  
        ////                                                  
        ,   d_hotel13_rid_g_x = "[FIX:d_hotel13_r13_g_x]"  
        ,   d_hotel13_rid_g_y = "[FIX:d_hotel13_r13_g_y]"   
        ////
        ,   rid = "[FIX:r13:(r13==RoomID[0...12])]"
        ,   r16 = "[FIX:r13:(THIRTEEN_NOT_SIXTEEN_IDIOT)]"
        ,   gid = "[FIX:g25:(g25==GridID[0...24])]"
        ////
        ,   rgw = "[FIX:just_use:g_w(gridcell_width_)]"
        ,   rgh = "[FIX:just_use:g_h(gridcell_height)]"
        ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //:===================================:ITS_WRONG_CARL://


    const d_hotel13_yes_aim =( 0
    ||  (!( "undefined" === typeof notnode ))  
    ||  (!( "undefined" === typeof yesnode ))  
    );;
    const d_hotel13_not_aim =( 
        (!d_hotel13_yes_aim)  );;
        
    const d_hotel13_sam =( d_hotel13_not_aim ? 
    {   laxcoma : "[HACK]"
    
    ,   hot_can : null  //: HOTel CANvas
    ,   hot_con : null  //: HOTel CONtext
    
    ,   vis_til : (1)   //: VISIBLE: TILE(S)
    ,   vis_bom : (1)   //: VISIBLE: BOMB(S)
    ,   vis_fad : (1)   //: VISIBLE: FADA(S)
    
    ,   tik_fps : (30)   //: One Frame Per Second
    ,   tik_num :(0-1)  //: AKA[ hot_tik ]
    
    ,   clk_p_x :(0-1)  //: Last Clicked Pixel X
    ,   clk_p_y :(0-1)  //: Last Clicked Pixel Y
    
    ,   clk_g_x :(0-1)  //: Last Clicked Grid Cell X
    ,   clk_g_y :(0-1)  //: Last Clicked Grid Cell Y
    
    ,   te7_clk_t_x : new Array( 7 )
    ,   te7_clk_t_y : new Array( 7 )
    
    ,   edi_te7 :(5)  //: Editor Tile Size ://
    
    } : { } );;
    //: Object.seal( d_hotel13_sam.te7_clk_t_x );
    //: Object.seal( d_hotel13_sam.te7_clk_t_y );
    Object.seal( d_hotel13_sam             );
        

    const d_bugman_yes =( "[JUST_USE:d_bug]" );
    const d_bugdude_yes=( "[JUST_USE:d_bug]" );
    
    var d_bug =( 1 /**This Doesn't Need SYSTEM NAME**/ );
    
    if( d_hotel13_yes_aim ){
    
        if( 0
        ||  ( "undefined" == typeof d_tik )
        ||  ( !( d_tik >= (0-1) ) )
        ){
            //:Global Ticker, 30FPS ticker that keeps://    
            //:counting up 1 every frame. Use as     ://
            //:unsigned integer.                     ://
            
            ERR("[WHERE_THE_FUCK_IS_MY_TICKER:2022]");
        };;
    };;

    //:DEV_NOTES:========================================://
    
        //: #_MAKE_EXPLOSIVE_AUTOMATA_ON_E_Z_2D_CANVAS_# ://
        
    //:========================================:DEV_NOTES://
    //:SERVER_JS_POLYFILLS:==============================://
    
        function F_PRIVATE_HOTEL13_ERR( msg ){ 
                alert( "[err]" );
                throw(   msg   );
        };;
        function F_PRIVATE_HOTEL13_ASS( t_f ){
            
            if( !t_f ){ 
                F_PRIVATE_HOTEL13_ERR("[ASSERT_FAIL]"); 
            };;
            return( t_f );
        };;

        if( !d_pix2048 ){
        
            var d_pix2048 = new Uint8Array( 2048*2048*4 );
        };;

        if( !ERR ){ var ERR = F_PRIVATE_HOTEL13_ERR; };
        if( !ASS ){ var ASS = F_PRIVATE_HOTEL13_ASS; };
        
    //:==============================:SERVER_JS_POLYFILLS://

//:#_UN_NAMESPACED_GLOBALS_#:================================://

    const c_opptrez =( 320 /**OnePixelPerTileRez**/ );
    ASS( 5 * 64 == 320 );
    ASS(  64 == c_opptrez /  5 );
    ASS(   5 == c_opptrez / 64 );
    
    const c_fiverez =( 1600 /** Five Pixels Per Tile **/ );
    ASS(  c_fiverez / 5 == c_opptrez );
    
                             //:         BIG == BIG/LARGE://
    const c_tendbig =( 5 );  //:Reach Of BIG Bomb Tendril://
    const c_tendlit =( 1 );  //:Reach Of LIT Bomb Tendril://
                             //:         LIT == LITTLE   ://
                             
    const ____data_locations_of_hotel_rooms____=
         "____data_locations_of_hotel_rooms____"
    ,     h_x_0 =(0);h_x_1=(1);h_x_2=(2);h_x_3=(3)
    ,     h_y_0 =(0);h_y_1=(1);h_y_2=(2);h_y_3=(3)
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
///   var ft0,ft1,ft2,ft3,ft4,ft5,ft6,ft7,ft8,ft9 ;
///   var fta,ftb,ftc,ftd,fte,ftf ;
///   ( ft0=ft1=ft2=ft3=ft4=ft5=ft6=ft7=ft8=ft9=
///     fta=ftb=ftc=ftd=ftf=()=>{
///       ERR("[NOT:FT:FLAMETYPE:YES:FD:FLAMEDAMAGE]");
///     }
///   );;
    
    const ____fd_types_flames_are_damage____=
         "____fd_types_flames_are_damage____"
    ,   fd0=( function(){ ERR("[#_why_ft0_bad_#]"); } )
    
    ,   fd1=( 0x1 ) //: VERTICAL    FLAME COLOR ://
    ,   fd2=( 0x2 ) //: HORIZONTAL  FLAME COLOR ://
    ,   fd3=( 0x3 ) //: SMALL 4_WAY FLAME COLOR ://
    ,   fd4=( 0x4 ) //: LARGE 4_WAY FLAME COLOR ://
    
    ,   fd5=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fd6=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fd7=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fd8=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fd9=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fda=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fdb=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )

        //:------------------------------------------://
        //: DETON : Detonates bombs ?                ://
        //: KIL_T : Kills Tiles ?                    ://
        //: ANIME : Animated Effect In Shader ?      ://
        //:                                          ://
        //: fdc :  NOT DETON : NOT KIL_T : YES ANIME ://
        //: fdd :  YES DETON : NOT KIL_T : YES ANIME ://
        //: fde :  YES DETON : YES KIL_T : YES ANIME ://
        //: fdf :  YES DETON : YES KIL_T : NOT ANIME ://
        //:------------------------------------------://
    
    ,   fdc=( 0xC ) //: Anti_Gravity_Water       ://
    ,   fdd=( 0xD ) //: PLASMA : Safe To Touch   ://
    ,   fde=( 0xE ) //: PLASMA : Unsafe To Touch ://
    ,   fdf=( 0xF ) //: Always Existed Damage    ://
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    const ____bomb_types_in_last_nyble____=
         "____bomb_types_in_last_nyble____"
    ,   bt0=( function(){ ERR("[#_why_bt0_bad_#]"); } )
    
    //: 
    ,   bt1=( 0x1 ) //: BOMB_VERT : AA3 blast : 0x5 :----://
    ,   bt2=( 0x2 ) //: BOMB_HORZ : AA3 blast : 5x0 :----://
    ,   bt3=( 0x3 ) //: BOMB_FUSE : AA3 blast : 1x1 :----://
    ,   bt4=( 0x4 ) //: BOMB_SKUL : AA3 blast : 5x5 :----://
                                                    
    ,   bt5=( 0x5 ) //: BOMB_VERT : BOX blast : 0x5 :----://
    ,   bt6=( 0x6 ) //: BOMB_HORZ : BOX blast : 5x0 :----://
    ,   bt7=( 0x7 ) //: BOMB_FUSE : BOX blast : 1x1 :----://
    ,   bt8=( 0x8 ) //: BOMB_SKUL : BOX blast : 5x5 :----://
    
    //: #_FEATURE_CREEP_ALLOW_AFTER_1ST_PLAYABLE_#
    //: IDEA: Infinte Laser ( vertical & horizontal )
    //:       Moves until it touches invincible tile.
    ,   bt9=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_1]"); }  )    
    ,   bta=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_2]"); }  )
    
    //: #_FEATURE_CREEP_ALLOW_AFTER_1ST_PLAYABLE_#
    //: IDEA: Left,Right,Up,Down Cannons that emit
    //:       rolling flame type that propegates itself.
    ,   btb=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_3]"); }  )
    ,   btc=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_4]"); }  )
    ,   btd=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_5]"); }  )
    ,   bte=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_6]"); }  )
    
    ,   btf=( ()=>{ ERR("[#_why_btf_bad_#]"); } )
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    const ____master_memory_block_indexes____=
         "____master_memory_block_indexes____"
    ,   mm0=( 0 ) , mm1=( 1 ) , mm2=( 2 ) , mm3=( 3 )
    ,   mm4=( 4 ) , mm5=( 5 ) , mm6=( 6 ) , mm7=( 7 )
    ,   mm8=( 8 ) , mm9=( 9 ) , mma=(10 ) , mmb=(11 )
    ,   mmc=(12 ) , mmd=(13 ) , mme=(14 ) , mmf=(15 )
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
    const ____the_13_rooms_of_one_hotel____=
         "____the_13_rooms_of_one_hotel____"
    ,                     r00=( 0 ) 
    ,           r01=( 1 ),r02=( 2 ),r03=( 3 )
    , r04=( 4 ),r05=( 5 ),r06=( 6 ),r07=( 7 ),r08=( 8 )
    ,           r09=( 9 ),r10=(10 ),r11=(11 )
    ,                     r12=(12 )
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
    const ____the_grid_space_of_the_13_rooms____ =
         "____the_grid_space_of_the_13_rooms____"
    , g00=( 0 ),g01=( 1 ),g02=( 2 ),g03=( 3 ),g04=( 4 )
    , g05=( 5 ),g06=( 6 ),g07=( 7 ),g08=( 8 ),g09=( 9 )
    , g10=(10 ),g11=(11 ),g12=(12 ),g13=(13 ),g14=(14 )
    , g15=(15 ),g16=(16 ),g17=(17 ),g18=(18 ),g19=(19 )
    , g20=(20 ),g21=(21 ),g22=(22 ),g23=(23 ),g24=(24 )
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
    const ____25_5x5_gridcells_but_diamond_of_13_rooms____=    
         "____25_5x5_gridcells_but_diamond_of_13_rooms____"
    ,   g_x_0=(0),g_x_1=(1),g_x_2=(2),g_x_3=(3),g_x_4=(4)
    ,   g_y_0=(0),g_y_1=(1),g_y_2=(2),g_y_3=(3),g_y_4=(4)
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//:================================:#_UN_NAMESPACED_GLOBALS_#://

    //:MISC_HOTEL13_LOOKUP_TABLES:===========================://
    
        //:------------------------------------------://
        //: Don't be redundant here. Lateral offset  ://
        //: is the size of current tilemap in tiles  ://
        //: No need for[ san ]lookup table.          ://
        //:------------------------------------------://
        
        const d_hotel13_te7_t_s = "[:::FIX:::te7_peb]" ;
        const d_hotel13_te7_t_w = "[:::FIX:::te7_peb]" ;
        const d_hotel13_te7_t_h = "[:::FIX:::te7_peb]" ;
        const d_hotel13_te7_wid = "[te7_lat||te7_peb]" ;
        const d_hotel13_te7_hig = "[te7_lat||te7_peb]" ;
        const d_hotel13_te7_san = "[te7_lat:::FIX:::]" ;
    
        var d_hotel13_te7_peb =[
              1 ,   2 ,   4 ,   8 ,  16 ,  32 ,  64
        //: t_0 , t_1 , t_2 , t_3 , t_4 , t_5 , t_6  ://             
        ];;
        var d_hotel13_te7_lat =[
             64 ,  32 ,  16 ,   8 ,   4 ,   2 ,   1
        //: t_0 , t_1 , t_2 , t_3 , t_4 , t_5 , t_6  ://
        ];;
        
        var d_hotel13_te7_dia =[ 
            0                                //: t_0 ://
        ,   0 + 64                           //: t_1 ://
        ,   0 + 64 + 32                      //: t_2 ://
        ,   0 + 64 + 32 + 16                 //: t_3 ://
        ,   0 + 64 + 32 + 16 + 8             //: t_4 ://
        ,   0 + 64 + 32 + 16 + 8 + 4         //: t_5 ://
        ,   0 + 64 + 32 + 16 + 8 + 4 + 2     //: t_6 ://
        ];;
        
        Object.freeze( d_hotel13_te7_lat );
        Object.freeze( d_hotel13_te7_dia );
        
    //:===========================:MISC_HOTEL13_LOOKUP_TABLES://
    //:ADJACENT_ROOMS_LOOKUP_TABLE:==========================://
    //:                          <>                          ://  
    //:           +---+          <>          +---+           ://    
    //:           |000|          <>          |r00|           ://    
    //:           +---+          <>          +---+           ://    
    //:      +---++---++---+     <>     +---++---++---+      ://    
    //:      |001||002||003|     <>     |r01||r02||r03|      ://    
    //:      +---++---++---+     <>     +---++---++---+      ://    
    //: +---++---++---++---++---+<>+---++---++---++---++---+ ://    
    //: |004||005||006||007||008|<>|r04||r05||r06||r07||r08| ://    
    //: +---++---++---++---++---+<>+---++---++---++---++---+ ://    
    //:      +---++---++---+     <>     +---++---++---+      ://    
    //:      |009||010||011|     <>     |r09||r10||r11|      ://    
    //:      +---++---++---+     <>     +---++---++---+      ://    
    //:           +---+          <>          +---+           ://    
    //:           |012|          <>          |r12|           ://    
    //:           +---+          <>          +---+           ://    
    //:  Room_ID ( r13 )         <> Room_ID ( r13 )          ://
    //:- - - - - - - - - - - - - -- - - - - - - - - - - - - -://
    //:  Grid_ID ( g25 )         <> Grid_ID ( g25 )          ://
    //:           +---+          <>          +---+           ://
    //:  000  001 |002| 003  004 <> g00  g01 |g02| g03  g04  ://
    //:           +---+          <>          +---+           ://
    //:      +---++---++---+     <>     +---++---++---+      ://
    //:  005 |006||007||008| 009 <> g05 |g06||g07||g08| g09  ://
    //:      +---++---++---+     <>     +---++---++---+      ://
    //: +---++---++---++---++---+<>+---++---++---++---++---+ ://
    //: |010||011||012||013||014|<>|g10||g11||g12||g13||g14| ://
    //: +---++---++---++---++---+<>+---++---++---++---++---+ ://
    //:      +---++---++---+     <>     +---++---++---+      ://
    //:  015 |016||017||018| 019 <> g15 |g16||g17||g18| g19  ://
    //:      +---++---++---+     <>     +---++---++---+      ://
    //:           +---+          <>          +---+           ://
    //:  020  021 |022| 023  024 <> g20  g21 |g22| g23  g24  ://
    //:           +---+          <>          +---+           ://
    //:- - - - - - - - - - - - - -- - - - - - - - - - - - - -://
    if( 1 == 1 ){
    
        let  _  =( 0-4040666 ) ;
        let ___ =( 0-333_666 ) ;
        
        var d_hotel13_g25_r13 =[ //: Grid_ID ==> Room_ID ://    
            
            ( _ ),( _ ),(r00),( _ ),( _ )
        ,   ( _ ),(r01),(r02),(r03),( _ )
        ,   (r04),(r05),(r06),(r07),(r08)
        ,   ( _ ),(r09),(r10),(r11),( _ )
        ,   ( _ ),( _ ),(r12),( _ ),( _ )
        ];;
        var d_hotel13_r13_g25 =[ //: Room_ID ==> Grid_ID ://    
                        (g02) 
        ,         (g06),(g07),(g08) 
        ,   (g10),(g11),(g12),(g13),(g14)
        ,         (g16),(g17),(g18) 
        ,               (g22) 
        ];;
        
        var d_hotel13_g25_h_x =[
            ( ___ ),( ___ ),(h_x_0),( ___ ),( ___ )
        ,   ( ___ ),(h_x_1),(h_x_2),(h_x_3),( ___ )
        ,   (h_x_0),(h_x_1),(h_x_2),(h_x_3),(h_x_1)
        ,   ( ___ ),(h_x_0),(h_x_1),(h_x_2),( ___ )
        ,   ( ___ ),( ___ ),(h_x_3),( ___ ),( ___ )
        
        ];;
        var d_hotel13_g25_h_y =[
            ( ___ ),( ___ ),(h_y_0),( ___ ),( ___ )
        ,   ( ___ ),(h_y_0),(h_y_0),(h_y_0),( ___ )
        ,   (h_y_1),(h_y_1),(h_y_1),(h_y_1),(h_y_2)
        ,   ( ___ ),(h_y_2),(h_y_2),(h_y_2),( ___ )
        ,   ( ___ ),( ___ ),(h_y_3),( ___ ),( ___ )
        ];;
        
        //: Adjactent( render-wise )Rooms ://
        var d_hotel13_adj =[
        //: SLF, L,R,T,B  ,  (LEF),(RIG),(TOP),(BOT)
            r00, 0,0,0,1  ,  ( _ ),( _ ),( _ ),(r02)  
        ,   r01, 0,1,0,1  ,  ( _ ),(r02),( _ ),(r05)  
        ,   r02, 1,1,1,1  ,  (r01),(r03),(r00),(r06)  
        ,   r03, 1,0,0,1  ,  (r02),( _ ),( _ ),(r07)  
        ,   r04, 0,1,0,0  ,  ( _ ),(r05),( _ ),( _ )  
        ,   r05, 1,1,1,1  ,  (r04),(r06),(r01),(r09)  
        ,   r06, 1,1,1,1  ,  (r05),(r07),(r02),(r10)  
        ,   r07, 1,1,1,1  ,  (r06),(r08),(r03),(r11)  
        ,   r08, 1,0,0,0  ,  (r07),( _ ),( _ ),( _ )  
        ,   r09, 0,1,1,0  ,  ( _ ),(r10),(r05),( _ )  
        ,   r10, 1,1,1,1  ,  (r09),(r11),(r06),(r12)  
        ,   r11, 1,0,1,0  ,  (r10),( _ ),(r07),( _ )  
        ,   r12, 0,0,1,0  ,  ( _ ),( _ ),(r10),( _ )    
        ];;
        
        let l,r,t,b ;
        
    //: RoomID ==> HasAdjacentRoom[ lef | rig | top | bot ]  ://
    l=[ ___,___,r01,r02,___,r04,r05,r06,r07,___,r09,r10,___ ];   
    r=[ ___,r02,r03,___,r05,r06,r07,r08,___,r10,r11,___,___ ];
    t=[ ___,___,r00,___,___,r01,r02,r03,___,r05,r06,r07,r10 ];
    b=[ r02,r05,r06,r07,___,r09,r10,r11,___,___,r12,___,___ ];
        
        var d_hotel13_r13_adj_lef=( l ); //: r13 ==> adj_lef ://
        var d_hotel13_r13_adj_rig=( r ); //: r13 ==> adj_rig ://
        var d_hotel13_r13_adj_top=( t ); //: r13 ==> adj_top ://
        var d_hotel13_r13_adj_bot=( b ); //: r13 ==> adj_bot ://
        
        var d_hotel13_r13_g_x =[  //: RoomID ==> Grid_X ://
                            (g_x_2) 
        ,           (g_x_1),(g_x_2),(g_x_3) 
        ,   (g_x_0),(g_x_1),(g_x_2),(g_x_3),(g_x_4)
        ,           (g_x_1),(g_x_2),(g_x_3) 
        ,                   (g_x_2)
        ];;
        var d_hotel13_r13_g_y =[  //: RoomID ==> Grid_Y ://
                            (g_y_0) 
        ,           (g_y_1),(g_y_1),(g_y_1) 
        ,   (g_y_2),(g_y_2),(g_y_2),(g_y_2),(g_y_2)
        ,           (g_y_3),(g_y_3),(g_y_3) 
        ,                   (g_y_4)
        ];;
        
        //: [A]==[T_L]
        //: [B]==[T_R]
        //: [C]==[B_L]
        //: [D]==[B_R]
        
        //: Kitty Corner Rooms( render-wise )://
        var d_hotel13_kit =[
        //: SLF, A,B,C,D  ,  (T_L),(T_R),(B_L),(B_R)              
            r00, 0,0,1,1  ,  ( _ ),( _ ),(r01),(r03)              
        ,   r01, 0,1,1,1  ,  ( _ ),(r00),(r04),(r06)              
        ,   r02, 0,0,1,1  ,  ( _ ),( _ ),(r05),(r07)              
        ,   r03, 1,0,1,1  ,  (r00),( _ ),(r06),(r08)              
        ,   r04, 0,1,0,1  ,  ( _ ),(r01),( _ ),(r09)              
        ,   r05, 0,1,0,1  ,  ( _ ),(r02),( _ ),(r10)              
        ,   r06, 1,1,1,1  ,  (r01),(r03),(r09),(r11)              
        ,   r07, 1,0,1,0  ,  (r02),( _ ),(r10),( _ )              
        ,   r08, 1,0,1,0  ,  (r03),( _ ),(r11),( _ )              
        ,   r09, 1,1,0,1  ,  (r04),(r06),( _ ),(r12)              
        ,   r10, 1,1,0,0  ,  (r05),(r07),( _ ),( _ )              
        ,   r11, 1,1,1,0  ,  (r06),(r08),(r12),( _ )              
        ,   r12, 1,1,0,0  ,  (r09),(r11),( _ ),( _ )              
        ];;  //: T T B B  ,  (T_L),(T_R),(B_L),(B_R) 
        //:::::: L R L R  ,  (T_L),(T_R),(B_L),(B_R) 

    let t_l,t_r,b_l,b_r ;
    t_l=[ ___,___,___,r00,___,___,r01,r02,r03,r04,r05,r06,r09 ];   
    t_r=[ ___,r00,___,___,r01,r02,r03,___,___,r06,r07,r08,r11 ];   
    b_l=[ r01,r04,r05,r06,___,___,r09,r10,r11,___,___,r12,___ ];   
    b_r=[ r03,r06,r07,r08,r09,r10,r11,___,___,r12,___,___,___ ];   
 
        d_hotel13_r13_kit_t_l =( t_l );      
        d_hotel13_r13_kit_t_r =( t_r );      
        d_hotel13_r13_kit_b_l =( b_l );      
        d_hotel13_r13_kit_b_r =( b_r );      
                                                                  
        Object.freeze( d_hotel13_adj         );                       
        Object.freeze( d_hotel13_kit         );
        Object.freeze( d_hotel13_g25_r13     );
        Object.freeze( d_hotel13_r13_g25     );
        
        Object.freeze( d_hotel13_r13_adj_lef );
        Object.freeze( d_hotel13_r13_adj_rig );
        Object.freeze( d_hotel13_r13_adj_top );
        Object.freeze( d_hotel13_r13_adj_bot );
    };;
    //:==========================:ADJACENT_ROOMS_LOOKUP_TABLE://



    

                
    const F_HOTEL13_EXP = "[FIX:F_HOTEL13_DET]" ;
    
    //:DEBUGGING_STUFF:==================================://
    if( d_bug >= 1 ){
    
        for( let i_te7 = 0 ; i_te7 <=(7-1) ; i_te7++ ){
        
            //: Lateral Offset
            var lat =( 1+( 0x3F >>> (i_te7) ) );   //:#LATOS#://
            var chk =( d_hotel13_te7_lat[ i_te7 ] );
            if( lat != chk ){ ERR("[no_agree]"); };
            console.log( i_te7 , " ==> " , lat );
        };;
        console.log( " " );
        for( let i_te7 = 0 ; i_te7 <=(7-1) ; i_te7++ ){
        
            //: Diagonal Offset #DIAGOS#
            var dia =( 128 - Math.pow( 2 , (7-i_te7) ) );
            var chk =( d_hotel13_te7_dia[ i_te7 ] );
            if( dia != chk ){ ERR("[no_agree]" ); };
            console.log( i_te7 , " ==> " , dia );
        };;
    };;
    //:==================================:DEBUGGING_STUFF://
    //:DOE___DETONATION_OVERFLOW_EDGE:===================://
    //:                                                  ://
    //:  SO goddammed simple it's like... Why is this    ://
    //:  a function? It is a function because couldn't   ://
    //:  wrap my head around what I was doing.           ://
    //:                                                  ://
    //:  When we EXTEND explosions into another          ://
    //:  adjacent room, make the explosion start at      ://
    //:  the edge of the room it is extended into,       ://
    //:  and have the blast direction pierce further     ://
    //:  in.                                             ://
    //:                                                  ://
    //:  We were doing it another way in a few places.   ://
    //:  ( Making the origin pierce adjacent room )      ://
    //:  ( and having explosion move back towards )      ://
    //:  ( the original room.                     )      ://
    //:  ( Confusing as fuck, and would BREAK if  )      ://
    //:  ( super long blast spans multiple rooms  )      ://
    //:  ( ...like the infinite blast you want... )      ://
    //:                                                  ://
    //:- - - - - - - - - - - - -- - - - - - - - - - - - -://
    
    //: BLAST_DIRECTION : BAK_LEF ://
                          /// LEF ///
        const   F_HOTEL13_DOE_LEF = function
        PRIVATE_F_HOTEL13_DOE_LEF(
        
            i_lat
        ){
            return( i_lat - 1 );
        };;
    //: BLAST_DIRECTION : FWD_RIG ://
                          /// RIG ///
        const   F_HOTEL13_DOE_RIG = function
        PRIVATE_F_HOTEL13_DOE_RIG(
        
            i_lat
        ){
            return(    0  );
        };;
    //: BLAST_DIRECTION : UPP_TOP ://
                          /// TOP ///
        const   F_HOTEL13_DOE_TOP = function
        PRIVATE_F_HOTEL13_DOE_TOP(
        
            i_lat
        ){
            return( i_lat - 1 );
        };;
    //: BLAST_DIRECTION : DOW_BOT ://
                          /// BOT ///
        const   F_HOTEL13_DOE_BOT = function
        PRIVATE_F_HOTEL13_DOE_BOT(
        
            i_lat
        ){
            return(    0  );
        };;
    //:===================:DOE___DETONATION_OVERFLOW_EDGE://
    //:DETONATION_FLAME_REMAINDER:=======================://
    //:                                                  ://    
    //: Also very simple calculations that could be      ://    
    //: inlined. But performance doesn't matter if       ://    
    //: you can't comprehend what you are doing and      ://    
    //: you write buggy code ( or never finish the code )://  
    //: DATE[ 2022_07_05 ]117AM 4th of july well spent.  ://
    //:                                                  ://    
    //:- - - - - - - - - - - - -- - - - - - - - - - - - -://
    
    //: BLAST_DIRECTION : BAK_LEF ://
                          /// LEF ///
        const   F_HOTEL13_REM_LEF = function
        PRIVATE_F_HOTEL13_REM_LEF(
        
            i_lat , i_dog_x , i_lef_t 
        ){
            //:------------(max_____p)-(min_____p)-------://
            var used_up =( (i_dog_x)-(    0    )+1 );
            var leakage =(  i_lef_t     -used_up );
            var subself =(  leakage - 1 );   //:#SUBSELF#://
            
            if( d_bug >= 1 ){ ASS( subself >= 0 );};
            return( subself );
        };;
    //: BLAST_DIRECTION : FWD_RIG ://
                          /// RIG ///
        const   F_HOTEL13_REM_RIG = function
        PRIVATE_F_HOTEL13_REM_RIG(
        
            i_lat , i_dog_x , i_rig_t
        ){
            //:------------(max_____p)-(min_____p)-------://
            var used_up =( (i_lat - 1)-(i_dog_x)+1 );
            var leakage =(  i_rig_t     -used_up );
            var subself =(  leakage - 1 );   //:#SUBSELF#://
            
            if( d_bug >= 1 ){ ASS( subself >= 0 );};
            return( subself );
        };;
    //: BLAST_DIRECTION : UPP_TOP ://
                          /// TOP ///
        const   F_HOTEL13_REM_TOP = function
        PRIVATE_F_HOTEL13_REM_TOP(
        
            i_lat , i_dog_y , i_top_t
        ){
            //:------------(max_____p)-(min_____p)-------://
            var used_up =( (i_dog_y)-(    0    )+1 );
            var leakage =(  i_top_t     -used_up );
            var subself =(  leakage - 1 );   //:#SUBSELF#://
            
            if( d_bug >= 1 ){ ASS( subself >= 0 );};
            return( subself );
        };;
    //: BLAST_DIRECTION : DOW_BOT )://
                          /// BOT ///
        const   F_HOTEL13_REM_BOT = function
        PRIVATE_F_HOTEL13_REM_BOT(
        
            i_lat , i_dog_y , i_bot_t 
        ){
            //:------------(max_____p)-(min_____p)-------://
            var used_up =( (i_lat - 1)-(i_dog_y)+1 );
            var leakage =(  i_bot_t     -used_up );
            var subself =(  leakage - 1 );   //:#SUBSELF#://
            
            if( d_bug >= 1 ){ ASS( subself >= 0 );};
            return( subself );
        };;
    //:=======================:DETONATION_FLAME_REMAINDER://    

    const      F_HOTEL13_PUT_ANY = function(){
    ERR( "[FIX:F_HOTEL13_U32_PUT_ANY]" ); };;
    
    const      F_HOTEL13_GET_LOC = function(){
    ERR( "[FIX:F_HOTEL13_DI8_DI1::::]" ); };;
    
    const   F_HOTEL13_DI8_DI1 = function
    PRIVATE_F_HOTEL13_DI8_DI1(
    
        i_san        //: <-- 512 or 2048 , pixel span    ://
                      
    ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO| d1,d2 | 03,04 | ://
    ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO| d3,d4 | 05,06 | ://
    ,   i_te7,i_la3  //:<--LOCA:EXPALAY| d5,d6 | 07,008| ://
    ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY| d7,d8 | 09,10 | ://
    ){               //:       @d1_d2_d3_d4_d5_d6_d7_d8@ ://
        if( d_bug ){
            if( i_t_x < 0 || i_t_y < 0  ){ ERR("[x_y]"); };
            if( i_te7 < 0 || i_te7 >= 7 ){ ERR("[te7]"); };
        };;
    
        var o_di1 =( 0 ); //:Output:I coord://
        var   o_x =( 0 ); //:Output:X coord://
        var   o_y =( 0 ); //:Output:Y coord://
        var   dia =( 0 ); //:OFFSET : DIAGONAL://
        var   lat =( 0 ); //:OFFSET : LATERAL ://
        var   l_x =( 0 ); //:Lateral X
        var   l_y =( 0 ); //:Lateral Y
        
        dia =( d_hotel13_te7_dia[ i_te7 ] );   //:#DIAGO#://
        lat =( d_hotel13_te7_lat[ i_te7 ] );   //:#LATOS#://
        
        l_x =          ( i_la3 % 2 );
        l_y =Math.floor( i_la3 / 2 );
        
        o_x += ( 512 * i_c_x ); //:City Block Size Is    ://    
        o_y += ( 512 * i_c_y ); //:MasterMemoryCell      ://    
        
        o_x += ( 128 * i_h_x ); //:Levels are 64x64 game ://
        o_y += ( 128 * i_h_y ); //:tiles in @quarkmap@.  ://
                                //:64 tiles needs 128 san://
        o_x += ( dia );
        o_y += ( dia );
        
        o_x += ( l_x * lat );
        o_y += ( l_y * lat );
        
        o_x += ( i_t_x );
        o_y += ( i_t_y );
        
        o_di1 =( o_x + ( o_y * i_san ) );
        
        if( d_bug >= 1 ){
            if( i_t_x > (lat-1) ){ ERR("[OOB_ITX]"); };
            if( i_t_y > (lat-1) ){ ERR("[OOB_ITY]"); };
        };;
        return( o_di1 );
    };;

    const   F_HOTEL13_U32_PUT_ANY = function
    PRIVATE_F_HOTEL13_U32_PUT_ANY(
    
        i_pix,i_san  //:<--DATA:PIXELS | a1,a2 | 01,02 | ://
    ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO| a3,a4 | 03,04 | ://
    ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO| a5,a6 | 05,06 | ://
    ,   i_te7,i_la3  //:<--LOCA:EXPALAY| a7,tl | 07,008| ://
    ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY| tx,ty | 09,10 | ://
    ,   i_u32        //:<--VALU:TileVAL| tv    | 11,12 | ://
                     
    ){
    
        //: If put operation would go out of bounds,
        //: skip without crashing. No crash because 
        //: when "painting" a stroke that hits some
        //: of [canvas/tilemap] I think it would be
        //: pain to have crash.
        var skipme =( 0 );
        var di1    =(0-1); //:1D index of pixel data://
        
        //:INVALID_SIZE_IS_A_CRASH:----------------------://
        if( 512 != i_san && 2048 != i_san ){
            skipme=( 1 );
            ERR("[DATA_IS_INVALID_SIZE:2022_07_04]");
        };;
        //:----------------------:INVALID_SIZE_IS_A_CRASH://
        //:SKIP_IF_BAD_CITY_BLOCK:-----------------------://
        if( 512 == i_san ){
        
            //: ---------------------------------------- ://
            //: A 512x512 indicates we are editing a     ://
            //: SINGLE level pack that we are probably   ://
            //: saving into a .PNG file.                 ://
            //: Each cityblock is 512x512 in size,       ://
            //: so this offset must be zero.             ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
        
            if( i_c_x != 0 ){ skipme = 1 ; };
            if( i_c_y != 0 ){ skipme = 1 ; };
        }else
        if( 2048 == i_san ){
        
            //: ---------------------------------------- ://
            //: SEE : #_AIM_MASTER_MEMORY_LAYOUT_#       ://
            //:     : for why certain areas must         ://
            //:     : be skipped over.                   ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
        
            if( (!( 1 == i_c_x ) )
            &&  (!( 1 == i_c_y ) )
            ){
                skipme = 1 ; //:NOT WITHIN CROSS://
            }else
            if( !( i_c_x >= 0 && i_c_x <=(3-1) )
            ||  !( i_c_y >= 0 && i_c_y <=(3-1) )
            ){
                skipme = 1 ; //:NOT WITHIN 3X3 AREA://
            };;
                
        }else{
            skipme=( 1 );
            ERR( "[Designed_Only_For_These_Sizes]" );
        };;
        //:-----------------------:SKIP_IF_BAD_CITY_BLOCK://
        //:CITYBLOCK_TO_1D_INDEX:------------------------://
        if( (!skipme) && d_bug ){
        
            //:- - - - - - - - - - -- - - - - - - - - - -:// 
            //: 4X4 Grid of 512x512 Master Memory Cells  ://
            //:- - - - - - - - - - -- - - - - - - - - - -:// 
            
            var chk = ( i_c_x + ( i_c_y * 4 ) );
            if( 0
            &&                chk != mm1 
            &&  chk != mm4 && chk != mm5 && chk != mm6
            &&                chk != mm9
            ){
                skipme=( 1 );
                ERR("[PROGRAMMER_ERROR:2022_07_04]");
            };;
        };;
        //:------------------------:CITYBLOCK_TO_1D_INDEX://
        //:FIND_DATA_PIXEL_LOCATION_XY:------------------://
        if( !skipme ){
        
            di1 =( F_HOTEL13_DI8_DI1(
                
                i_san        //:<-- Pixel Span Of Data   ://
                             
            ,   i_c_x,i_c_y  //:<---CITYBLO| d1,d2 | --- ://
            ,   i_h_x,i_h_y  //:<---HOTELRO| d3,d4 | --- ://
            ,   i_te7,i_la3  //:<---EXPALAY| d5,d6 | --- ://
            ,   i_t_x,i_t_y  //:<---Tile_XY| d7,d8 | --- ://
            ));;             //:@d1_d2_d3_d4_d5_d6_d7_d8@://
        };;
        //:------------------:FIND_DATA_PIXEL_LOCATION_XY://
        //:SET_DATA_IN_PIXEL_BUFFER:---------------------://    
        if( !skipme ){
            
            i_pix[ (4*di1)+0 ]=( i_u32 >>> 24 )&(0xFF) ;
            i_pix[ (4*di1)+1 ]=( i_u32 >>> 16 )&(0xFF) ;
            i_pix[ (4*di1)+2 ]=( i_u32 >>>  8 )&(0xFF) ;
            i_pix[ (4*di1)+3 ]=( i_u32 >>>  0 )&(0xFF) ;
        
        };;
        //:---------------------:SET_DATA_IN_PIXEL_BUFFER://
    };;

    const c_lay_til =( 0 ); //: Tile Data LAY In HOTEL13 ://
    const c_lay_bom =( 1 ); //: Bomb Data LAY In HOTEL13 ://
    const c_lay_fad =( 2 ); //: Foda Data LAY In HOTEL13 ://
    const F_001 =( F_HOTEL13_U32_PUT_ANY );
    
    const   F_HOTEL13_U32_PUT_TIL = function
    PRIVATE_F_HOTEL13_U32_PUT_TIL(    /// TIL ///
             a1,a2,a3,a4,a5,a6,a7,              tx,ty,tv
    ){F_001( a1,a2,a3,a4,a5,a6,a7,  c_lay_til  ,tx,ty,tv );;
    //:      01,02,03,04,05,06,07,        008  ,09,10,11 ://    
    };; //:DATA__LOCA_______________________________VALU ://    
    
    const   F_HOTEL13_U32_PUT_BOM = function
    PRIVATE_F_HOTEL13_U32_PUT_BOM(    /// BOM ///
             a1,a2,a3,a4,a5,a6,a7,              tx,ty,tv
    ){F_001( a1,a2,a3,a4,a5,a6,a7,  c_lay_bom  ,tx,ty,tv );;
    //:    01,02,03,04,05,06,07,          008  ,09,10,11 ://    
    };; //:DATA__LOCA_______________________________VALU :// 
    
    const   F_HOTEL13_U32_PUT_FAD = function
    PRIVATE_F_HOTEL13_U32_PUT_FAD(    /// FAD ///
             a1,a2,a3,a4,a5,a6,a7,              tx,ty,tv
    ){F_001( a1,a2,a3,a4,a5,a6,a7,  c_lay_fad  ,tx,ty,tv );;
    //:    01,02,03,04,05,06,07,          008  ,09,10,11 ://    
    };; //:DATA__LOCA_______________________________VALU :// 
    
    
    //: ------------------------------------------------ ://
    //: Eventually we can build upon what the 32 bit     ://
    //: values for TIL,BOM,FAD mean, but save that       ://
    //: until we have the basic game working.            ://
    //: ------------------------------------------------ ://    
    
    
    const   F_HOTEL13_PUT_TIL = function
    PRIVATE_F_HOTEL13_PUT_TIL( 
    
        the_only_argument_is_an_object
    //: expand_on_meaning_of:TIL:value ://
    ){
        ERR( "[#_EXPAND_AFTER_1ST_PLAYABLE_#:PUT_TIL]" );    
    };;
    
    const   F_HOTEL13_PUT_BOM = function
    PRIVATE_F_HOTEL13_PUT_BOM( 
    
        the_only_argument_is_an_object 
    //: expand_on_meaning_of:BOM:value ://
    ){
        ERR( "[#_EXPAND_AFTER_1ST_PLAYABLE_#:PUT_BOM]" );
    };;
    
    const   F_HOTEL13_PUT_FAD = function
    PRIVATE_F_HOTEL13_PUT_FAD( 
    
        the_only_argument_is_an_object
    //: expand_on_meaning_of:FAD:value ://
    ){
        ERR( "[#_EXPAND_AFTER_1ST_PLAYABLE_#:PUT_FAD]" );
    };;
    
    const   F_HOTEL13_DET = function
    PRIVATE_F_HOTEL13_DET(
    
        i_g5x     //: GridCell Overlay X ://
    ,   i_g5y     //: GridCell Overlay Y ://
    ,   i_te7     //: What Tile Size Is The Bomb? ://
    
    ,   i_dog_x //:Detonation Point X (in room coords)
    ,   i_dog_y //:Detonation Point Y (in room coords)
    
    ,   i_lef_t //:Explosion  SPAN : LEFT
    ,   i_rig_t //:Explosion  SPAN : RIGHT
    ,   i_top_t //:Explosion  SPAN : TOP
    ,   i_bot_t //:Explosion  SPAN : BOTTOM
    
    ,   i_explo_box //:Is Box Filled Explosion?
    ,   i_recursive //:True if emitted by[ DET ]
                    //:function itself, needed to avoid
                    //:SFX being called more than once.
    ){
        if( d_bug >=1 ){
            if( i_g5x < 0 || i_g5x >= 4 ){ERR("[ihx]"); };
            if( i_g5y < 0 || i_g5y >= 4 ){ERR("[ihy]"); };
            if( i_dog_x < 0 ){ ERR("[NEGDETON:X]"); };
            if( i_dog_y < 0 ){ ERR("[NEGDETON:Y]"); };
        };;
        
        let REM_LEF = F_HOTEL13_REM_LEF ;
        let REM_RIG = F_HOTEL13_REM_RIG ;
        let REM_TOP = F_HOTEL13_REM_TOP ;
        let REM_BOT = F_HOTEL13_REM_BOT ;
        
        const _____ =( 0 );
        
        const i_r13 = "[INDEX_WAS_A_BAD_IDEA:USE:h_x:h_y]" ;
        
        const not_box =( 0 );
        const yes_box =( 1 );
        
        //:#_BIG_BOMBS_DESIGN_DECISON_#://
        //:#_RECURSION_TO_SOLVE_OUT_OF_ROOM_PROBLEM_#://
    
        var lef,rig,top,bot;
        
        var ovr_lef ; //:flame OVeR_flow:LEFT  ://
        var ovr_rig ; //:flame OVeR_flow:RIGHT ://
        var ovr_top ; //:flame OVeR_flow:TOP   ://
        var ovr_bot ; //:flame OVeR_flow:BOTTOM://
        
        const recursive_yes =( 1 );
        
        //: #_WHY_COE_START_AT_512_#
        var coe_p_x = 512; //: @cen_of_exp_pix@ X ://    
        var coe_p_y = 512; //: @cen_of_exp_pix@ Y ://
        var coe_p_i ; //:centerofexplosionpixelindex://
        var     h_i = "[USE:r13:room_id]" ;
        var     g25 ; //:Grid ID://
        var     r13 ; //:Room ID://
        var     p_i ; //:pixelindex://
        var     c_i ; //:componentindex://
        
        const   r13_kit =( "[FIX:kit_r13]" );
        
        var     kit_r13 ; //:kitty corner room id
        var     kit_g5x ; //:kitty gridcell x
        var     kit_g5y ; //:kitty gridcell y
        
        var     adj_r13 ; //:adjacent_room_id
        var     adj_g5x ; //:adjacent_gridcell_x
        var     adj_g5y ; //:adjacent_gridcell_Y
        
        var     doe_x   ; //:Detonation_Overflow_Edge
        var     doe_y   ; //:Detonation_Overflow_Edge
        
        g25 = ( i_g5x + ( i_g5y * 5 ) );
        r13 = d_hotel13_g25_r13[ g25 ];
        h_x = d_hotel13_g25_h_x[ g25 ];
        h_y = d_hotel13_g25_h_y[ g25 ];
        ASS( r13 >= 0 );
        
        if( d_bug >= 1 ){
        
            var chk_h_x =           ( r13 % 4 );
            var chk_h_y = Math.floor( r13 / 4 );
            
            if( chk_h_x <( 0 ) ){ERR("[h_x:NEG]");};    
            if( chk_h_y <( 0 ) ){ERR("[h_y:NEG]");};
            if( chk_h_x >(4-1) ){ERR("[h_x:POS]");};
            if( chk_h_y >(4-1) ){ERR("[h_y:POS]");};
            
            if( chk_h_x != h_x ){ ERR("[CHECKFAIL:h_x]"); };    
            if( chk_h_y != h_y ){ ERR("[CHECKFAIL:h_y]"); };
        };;
        
        //:---------------------------------://
        //: @dia@ : Diagonal Offset In Data ://
        //: @lat@ : Lateral  Offset In Data ://
        //: @coe@ : Core_Of_Explosions      ://
        //: @coe_p_x@ : COE - Pixel X       ://
        //: @coe_p_y@ : COE - Pixel Y       ://
        //:---------------------------------://
        
        var dia =(d_hotel13_te7_dia[ i_te7 ] );    //:#DIAGO#://
        var lat =(d_hotel13_te7_lat[ i_te7 ] );    //:#LATOS#://
        
        coe_p_x +=( h_x * 128 );
        coe_p_y +=( h_y * 128 );
        
        coe_p_x +=( dia );
        coe_p_y +=( dia );
        
        coe_p_x +=( lat ); //: HardCoded To Access The   ://
        coe_p_y +=(  0  ); //: Bombs Layer( lay == 1 )   ://
        
        coe_p_x += dog_x ;
        coe_p_y += dog_y ;
        
        if( d_bug >= 1 ){
            if( dog_x >= lat ){ ERR("[POSDETON:X]"); };
            if( dog_y >= lat ){ ERR("[POSDETON:Y]"); };
        };;
        
        //:Find Last Cells Of Explosion://
        lef = ( dog_x - i_lef_t );
        rig = ( dog_x + i_rig_t );
        top = ( dog_y - i_top_t );
        bot = ( dog_y + i_bot_t );
        
        //:RECURSION_ZONE:-------------------------------://
        //:                                              ://
        //:  Truncate Explosion Size To Fit Witin Bounds ://
        //:  of current [ level / room ] and re-emit     ://
        //:  chopped-off explosions into respective      ://
        //:  adjacent rooms.                             ://
        //:                                              ://
        //:- - - - - - - - - - - - - - - - - - - - - - - ://
        if( i_explo_box <= 0 ){ //:Cross Explosion://
        
            if( lef <  (0) ){
            
                adj_r13 = d_hotel13_r13_adj_lef[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_x =(F_HOTEL13_DOE_LEF( lat )           );
                rem_x =(REM_LEF( lat , i_dog_x , i_lef_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(    i_dog_y      )
                ,   ( rem_x ),( _____ ),( _____ ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   not_box,recursive_yes
                );;                 
            };;};;
            if( rig >= lat ){
            
                adj_r13 = d_hotel13_r13_adj_rig[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_x =(F_HOTEL13_DOE_RIG( lat )           );
                rem_x =(REM_RIG( lat , i_dog_x , i_rig_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(    i_dog_y      )
                ,   ( _____ ),( rem_x ),( _____ ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   not_box,recursive_yes
                );;                 
            };;};;
            if( top <  (0) ){
            
                adj_r13 = d_hotel13_r13_adj_top[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =i_g5x ;
                adj_g5y =d_hotel13_r13_g_y[ adj_r13 ];
                    
                doe_y =(F_HOTEL13_DOE_TOP( lat )           );
                rem_y =(REM_TOP( lat , i_dog_y , i_top_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (    i_dog_x      ),(      doe_y      )
                ,   ( _____ ),( _____ ),( rem_y ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   not_box,recursive_yes
                );;                 
            };;};;
            if( bot >= lat ){
            
                adj_r13 = d_hotel13_r13_adj_bot[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =i_g5x ;
                adj_g5y =d_hotel13_r13_g_y[ adj_r13 ];
                    
                doe_y =(F_HOTEL13_DOE_BOT( lat )           );
                rem_y =(REM_BOT( lat , i_dog_y , i_bot_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (    i_dog_x      ),(      doe_y      )
                ,   ( _____ ),( _____ ),( _____ ),( rem_y )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   not_box,recursive_yes
                );;                 
            };;};;
        }else
        if( i_explo_box >= 1 ){
        
            //: ---------------------------------------- ://
            //: Don't bother commeting this... This is   ://
            //: too confusing for even comments to help  ://
            //: us understand the math. We need to       ://
            //: document it with a code-review video.    ://
            //: ---------------------------------------- ://
        
            var oob_lef =!!( lef <   0  );
            var oob_rig =!!( rig >= lat );
            var oob_top =!!( top <   0  );
            var oob_bot =!!( bot >= lat );
            
            /////// LEF ////// TOP /////////////////////////////
            if( oob_lef && oob_top ){       //:OOB_CORNER:T_L://
            
                kit_r13 = d_hotel13_r13_kit_t_l[ r13 ];
                                        //: t_l == TOP+LEF   ://
            if(            
                kit_r13 >= 0 //: KIT_ROOM_EXISTS ://    
            ){
                kit_g5x =d_hotel13_r13_g_x[ kit_r13 ];
                kit_g5y =d_hotel13_r13_g_y[ kit_r13 ];
                
                doe_x = F_HOTEL13_DOE_LEF( lat );
                doe_y = F_HOTEL13_DOE_TOP( lat );
                
                rem_x = REM_LEF( lat , i_dog_x , i_lef_t );
                rem_y = REM_TOP( lat , i_dog_y , i_top_t );
                
                F_HOTEL13_DET(
                    (    kit_g5x      ),(    kit_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(      doe_y      )
                ,   ( rem_x ),( _____ ),( rem_y ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;
            };;};;
            /////// RIG ////// BOT /////////////////////////////
            if( oob_rig && oob_bot ){       //:OOB_CORNER:B_R://
            
                kit_r13 = d_hotel13_r13_kit_b_r[ r13 ];
                                        //: b_r ==BOT+RIG    ://
            if(            
                kit_r13 >= 0 //: KIT_ROOM_EXISTS ://    
            ){
                kit_g5x =d_hotel13_r13_g_x[ kit_r13 ];
                kit_g5y =d_hotel13_r13_g_y[ kit_r13 ];
                
                doe_x = F_HOTEL13_DOE_RIG( lat );
                doe_y = F_HOTEL13_DOE_BOT( lat );
                
                rem_x = REM_RIG( lat , i_dog_x , i_rig_t );
                rem_y = REM_BOT( lat , i_dog_y , i_bot_t );
                 
                F_HOTEL13_DET(
                    (    kit_g5x      ),(    kit_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(      doe_y      )
                ,   ( _____ ),( rem_x ),( _____ ),( rem_y )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;
            };;};;
            /////// RIG ////// TOP /////////////////////////////
            if( oob_rig && oob_top ){       //:OOB_CORNER:T_R://
            
                kit_r13 = d_hotel13_r13_kit_t_r[ r13 ];
                                        //: t_r ==TOP+RIG    ://
            if(            
                kit_r13 >= 0 //: KIT_ROOM_EXISTS ://    
            ){
                kit_g5x =d_hotel13_r13_g_x[ kit_r13 ];
                kit_g5y =d_hotel13_r13_g_y[ kit_r13 ];
                
                doe_x = F_HOTEL13_DOE_RIG( lat );
                doe_y = F_HOTEL13_DOE_TOP( lat );
                
                rem_x = REM_RIG( lat , i_dog_x , i_rig_t );
                rem_y = REM_TOP( lat , i_dog_y , i_top_t );
                 
                F_HOTEL13_DET(
                    (    kit_g5x      ),(    kit_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(      doe_y      )
                ,   ( _____ ),( rem_x ),( rem_y ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;
            };;};;
            /////// LEF ////// BOT /////////////////////////////
            if( oob_lef && oob_bot ){       //:OOB_CORNER:B_L://
            
                kit_r13 = d_hotel13_r13_kit_b_l[ r13 ];
                                        //: b_l ==BOT+LEF    ://
            if(            
                kit_r13 >= 0 //: KIT_ROOM_EXISTS ://    
            ){
                kit_g5x =d_hotel13_r13_g_x[ kit_r13 ];
                kit_g5y =d_hotel13_r13_g_y[ kit_r13 ];
                
                doe_x = F_HOTEL13_DOE_LEF( lat );
                doe_y = F_HOTEL13_DOE_BOT( lat );
                
                rem_x = REM_LEF( lat , i_dog_x , i_lef_t );
                rem_y = REM_BOT( lat , i_dog_y , i_bot_t );
                 
                F_HOTEL13_DET(
                    (    kit_g5x      ),(    kit_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(      doe_y      )
                ,   ( rem_x ),( _____ ),( _____ ),( rem_y )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;
            };;};;
            
            if( oob_lef ){
            
                adj_r13 = d_hotel13_r13_adj_lef[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_x =(F_HOTEL13_DOE_LEF( lat )           );
                rem_x =(REM_LEF( lat , i_dog_x , i_lef_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(    i_dog_y      )
                ,   ( rem_x ),( _____ ),(i_top_t),(i_bot_t)
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;                 
            };;};;
                
            if( oob_rig ){
            
                adj_r13 = d_hotel13_r13_adj_rig[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_x =(F_HOTEL13_DOE_RIG( lat )           );
                rem_x =(REM_RIG( lat , i_dog_x , i_rig_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(    i_dog_y      )
                ,   ( _____ ),( rem_x ),(i_top_t),(i_bot_t)
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;                 
            };;};;
            
            if( oob_top ){
            
                adj_r13 = d_hotel13_r13_adj_top[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_y =(F_HOTEL13_DOE_TOP( lat )          );
                rem_y =(REM_TOP( lat , i_dog_x , i_top_t ));
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (    i_dog_x      ),(      doe_y      ) 
                ,   (i_lef_t),(i_rig_t),( rem_y ),( _____ ) 
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;                 
            };;};;
            if( oob_bot ){
            
                adj_r13 = d_hotel13_r13_adj_bot[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_y =(F_HOTEL13_DOE_BOT( lat )           );
                rem_y =(REM_BOT( lat , i_dog_x , i_bot_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (    i_dog_x      ),(      doe_y      ) 
                ,   (i_lef_t),(i_rig_t),( _____ ),( rem_y ) 
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;                 
            };;};;
            
            
        
        }else{
            ERR("[BadExplosionShape]");
        };;
        //:-------------------------------:RECURSION_ZONE://
        //:TRUNCATE_DETONATION_HERE:---------------------://
        //:                                              ://
        //:  Might look like we forgot a (+1) because    ://
        //:  we are doing math with two inclusive        ://
        //:  points here. But we are not, it is getting  ://
        //:  cancelled out by #SUBSELF#.                 ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        
            if(     oob_lef ){
                i_lef_t =( (i_dog_x)-(    0    ) );
            };;
            if(     oob_rig ){
                i_rig_t =( ( lat - 1 )-(i_dog_x) );
            };;
            if(     oob_top ){
                i_top_t =( (i_dog_y)-(    0    ) );
            };;
            if(     oob_bot ){
                i_bot_t =( ( lat - 1 )-(i_dog_y) );
            };;
        //:---------------------:TRUNCATE_DETONATION_HERE://
        //:ERROR_CHECKING_TRUNCATION_ZONE:---------------://
        //:                                              ://
        //:  Explosion should have been truncated to     ://
        //:  fit exactly within bounds of the current    ://
        //:  room. Any leakage into other rooms being    ://
        //:  fixed by recursive calls.                   ://
        //:                                              ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        if( d_bug >= 1 ){
        
            var b_l,b_r,b_t,b_b;//:BOUNDS:lef,rig,top,bot://
            b_l =( i_dog_x - i_lef_t );
            b_r =( i_dog_x + i_rig_t );
            b_t =( i_dog_y - i_top_t );
            b_b =( i_dog_y + i_bot_t );
            if( !(b_l>=(    0)) ){ ERR("[@PIS@:001]"); };
            if( !(b_r<=(lat-1)) ){ ERR("[@PIS@:002]"); };
            if( !(b_t>=(    0)) ){ ERR("[@PIS@:003]"); };
            if( !(b_b>=(lat-1)) ){ ERR("[@PIS@:004]"); };
        };;
        //:---------------:ERROR_CHECKING_TRUNCATION_ZONE://
        //:What_Ticker_Are_We_Using:---------------------://
        {
            var tik_bom =( 0 );
            
            if( d_hotel13_yes_aim ){
            
                tik_bom = d_tik ;//:Atomic_IVY_MMO:Ticker://
            }else
            if( d_hotel13_not_aim ){
            
                tik_bom = d_hotel13_sam.tik_num ;
            }else{
                ERR("[WTF:TICKER]");
            };;
        }
        //:---------------------:What_Ticker_Are_We_Using://
        //:SET_FLAMES_ARE_DAMAGE_TIMESTAMPS:-------------://
        //:                                              ://    
        //: By this time, the explosion has been         ://    
        //: truncated to fit within the room, so         ://    
        //: we don't have to worry about out of bounds   ://    
        //: cell indexes here.                           ://    
        //:                                              ://    
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        if( i_explo_box <= 0 ){ //:Cross Explosion://
        
            let pix =( d_pix2048 );
            coe_p_i = coe_p_x +( coe_p_y * 2048 );
        
            //:Center Explosion://
            p_i = coe_p_i;
            pix[ (4*p_i)+0 ]=( (tik_bom >>> 24)&(0xFF) );
            pix[ (4*p_i)+1 ]=( (tik_bom >>> 16)&(0xFF) );
            pix[ (4*p_i)+2 ]=( (tik_bom >>>  8)&(0xFF) );
            pix[ (4*p_i)+3 ]=( (tik_bom >>>  0)&(0xFF) );
            
            for( lef = 1 ; lef <= i_lef_t ; lef ++ ){
            
                p_i = coe_p_i - lef ;
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) );
            };;
            for( rig = 1 ; rig <= i_rig_t ; rig ++ ){
            
                p_i = coe_p_i + rig ;
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) );
            };;
            for( top = 1 ; top <= i_top_t ; top ++ ){
            
                p_i = coe_p_i -(top*2048);
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) );
            };;
            for( bot = 1 ; bot <= i_bot_t ; bot ++ ){
            
                p_i = coe_p_i +(bot*2048);
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) );
            };;
        }else
        if( i_explo_box >= 1 ){ //:Box Explosion://
        
            let pix =( d_pix2048 );
            coe_p_i = coe_p_x +( coe_p_y * 2048 );
            
            var org ; //:origin pixel index://
            var wid =( i_lef_t+1+i_rig_t );
            var hig =( i_top_t+1+i_bot_t );
            
            //:----------------------------------------://
            //: org : Top left origin of box explosion ://   
            //:----------------------------------------://
            
            org =( coe_p_i 
                    -( i_lef_t        )
                    -( i_top_t * 2048 )
            );;
            
            p_i =( org - 2048 - 1 ); //:#_BLP_#://
            for( var o_y = 0 ; o_y <=(hig-1) ; o_y ++ ){
            p_i +=( 2048 );
            for( var o_x = 0 ; o_x <=(wid-1) ; o_x ++ ){
            p_i +=(    1 );
            
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) ); 
            };;};;
        
        }else{
            ERR("[BADBOXFLAG]");
        };;
        //:-------------:SET_FLAMES_ARE_DAMAGE_TIMESTAMPS://
    };;

    const   F_HOTEL13_TIK = function
    PRIVATE_F_HOTEL13_TIK(
    
        //:----------------------------------://
        //: No Arguments. Update Simulation. ://
        //:----------------------------------://
    ){
    
        //: -------------------------------------------- ://
        //: Simulation does NOT need to update tile      ://
        //: values, because the[ FADA ]are used          ://
        //: in shader code to decide if a tile has       ://
        //: been destroyed.                              ://
        //: -------------------------------------------- ://
        
        var  r13 ; //: One of 13 rooms being updated.    ://
        var  h_x ; //: Hotel Room X ( r13 as h_x & h_y ) ://
        var  h_y ; //: Hotel Room Y ( r13 as h_x & h_y ) ://
        
    //:[ LOOP : TILE ]://
    
        for( r13 = 0 ; r13 <=(13-1) ; r13 ++ ){
        
            //: ---------------------------------------- ://
            //: Tile Loop. Do NOTHING. Shader Code ..... ://
            //: determines if we should render as not    ://
            //: existing. We never physically remove     ://
            //: the tile.                                ://
            //: ---------------------------------------- ://
        };;
        
    //:[ LOOP : BOMB ]://
    
        for( r13 = 0 ; r13 <=(13-1) ; r13 ++ ){
        
            //: ---------------------------------------- ://    
            //: Find bombs with EXPIRED TIMERS and emit  ://
            //: flames by calling[ DET ]function.        ://    
            //: [ DET ]will propegate INVISIBLE DAMAGE   ://
            //: to smaller cells. So small bombs only    ://
            //: need to check for flames in THEIR TILE   ://
            //: or LARGER overlapping tile.              ://
            //: ---------------------------------------- ://
            
            h_x = ( r13 % 4 );
            h_y = Math.floor( r13 / 4 );
            
           // slfjlsfjlsjfldsk
            
        };;
        
        
    //:[ LOOP : FADA ]://
    
        for( r13 = 0 ; r13 <=(13-1) ; r13 ++ ){
        
            //:------------------------------------------://
            //:                                          ://
            //: DONT NEED DOUBLE BUFFER FOR LOGIC HERE.  ://
            //:                                          ://
            //: B1 : NOT-detonated bomb this frame.      ://
            //: EX : EX (explosion), detonated bomb.     ://
            //: B2 : DETONATED BOMB this frame.          ://
            //: ** : Explosion Flames.                   ://
            //:                                          ://
            //: B1 is NOT-detonated , EX update is after.://
            //: B2 is YES-detonated , EX update is before://
            //:                                          ://
            //: As long as bombs have a slight delay     ://
            //: between being tripped by flames and      ://
            //: detonation, we should be able to         ://
            //: __AVOID__ double buffering.              ://
            //:                                          ://
            //: SPECIFICALLY :                           ://
            //:     AVOID 2 PASS PROCESS OF :            ://
            //:     1. Emit All Flames From EBOMBS       ://
            //:     2. Trip New Bombs Using Flames       ://
            //:                                          ://
            //:     *EBOMBS == Exploded Bombs            ://
            //:                                          ://
            //:  v1  v2  v3  v4  v5 ( cell visit order ) ://
            //:  ||  ||  ||  ||  ||                      ://
            //:  ||  ||  ||  ||  ||                      ://
            //:  VV  VV  VV  VV  VV                      ://
            //: [**][**][EX][**][**] <-- SAME_LAYER      ://
            //: [B1]    [**]    [B2] <-- SAME_LAYER      ://
            //:                                          ://
            //:------------------------------------------://
        };;
    
        console.log("heyyyo");
    };;
    
   ////////// function TEST_SIMULATION_PERFORMANCE( ){
   ////////// 
   //////////     F_HOTEL13_TIK();
   //////////     
   //////////     
   //////////     window.setTimeout( 
   //////////         TEST_SIMULATION_PERFORMANCE
   //////////     ,  (1000 / 30) //:30FPS://
   //////////     );;
   ////////// 
   ////////// };;
   ////////// 
   ////////// TEST_SIMULATION_PERFORMANCE();
    
    
    
    const   F_HOTEL13_DRAW_2D_TIL = function
    PRIVATE_F_HOTEL13_DRAW_2D_TIL(
    
        /** NO ARGS **/
    ){
        console.log( "[TODO:DRAW_2D_TIL]" );
        
        //: Render Bigger Tiles First                    ://

        let sam =( d_hotel13_sam         );    //:@MACRO@://
        let ctx =( d_hotel13_sam.hot_con );    //:@MACRO@://
        
        var g_w =( sam.hot_can.width / 5 ); //:GridCell.W://
        var g_h =( sam.hot_can.height/ 5 ); //:GridCell.H://
        
        var peb_m_x =( g_w / 64 );  //: peb multiplier x ://
        var peb_m_y =( g_w / 64 );  //: peb multiplier y ://
        
        var dpx ; //: @dpx@ : Data Pixel X :-------------://
        var dpy ; //: @dpy@ : Data Pixel Y :-------------://
        
        var dtx ; //: @dtx@ : Data TILE  X , extends(dpx)://
        var dty ; //: @dty@ : Data TILE  Y , extends(dpy)://
        var dti ; //: @dti@ : Data TILE  I , indexofdata ://
        var dtu ; //: @dtu@ : Data TILE  Uint32 Value    ://
        
        var h4x ; //: @h4x@ : HotelRoomX (DATALAYOUT)    ://
        var h4y ; //: @h4y@ : HotelRoomY (DATALAYOUT)    ://
                                                         
        var lat ; //: @lat@ : lateral  offset to data.   ://
        var dia ; //: @dia@ : diagonal offset to data.   ://
        var san ; //: @san@ : Span In Tiles (wid==hig)   ://
        
        var t_x ; //: @t_x@ : tile x ( @DATA_EQ_VIEW@ )  ://    
        var t_y ; //: @t_y@ : tile y ( @DATA_EQ_VIEW@ )  ://   
        var t_v ; //: @t_v@ : tile v ( v == VALUE/TYPE)  ://
        var t_w ; //: @t_w@ : tile w ( WIDTH IN PIXELS)  ://
        var t_h ; //: @t_h@ : tile h ( HEIGHT   PIXELS)  ://
        /// t_s ; //: @t_s@ : tile s ( HEIGHT===WIDTH )  ://
        var t_t ; //: @t_t@ : tile t ( TIK value )       ://
        
        var peb ; //: @peb@ : Size In Pebbles :----------://

        var c_i ; //: @c_i@ : component index of pixel.  ://
        
        var clk_t_x ; //:clicked tile , x coord.
        var clk_t_y ; //:clicked tile , y coord.
        
        var clk     ; //:clicked? boolean://

        for( var te7 =(7-1); te7 >=(  0 ) ; te7 -- ){
        
            peb = d_hotel13_te7_peb[ te7 ]
            t_w = ( peb * peb_m_x );
            t_h = ( peb * peb_m_y );
            
            clk_t_x = sam.te7_clk_t_x[ te7 ];
            clk_t_y = sam.te7_clk_t_y[ te7 ];
        
        for( var r13 =( 0 ); r13 <=(13-1) ; r13 ++ ){
        
            //:- - - - - - - - - - -- - - - - - - - - - -://
            //: @g_x@ : Grid Cell Where Room Could Be X  ://
            //: @g_y@ : Grid Cell Where Room Could Be Y  ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
            var g_x = d_hotel13_r13_g_x[ r13 ];
            var g_y = d_hotel13_r13_g_y[ r13 ];
            ASS( g_x >= 0 );
            ASS( g_y >= 0 );
            
            var o_x =( g_x * g_w );
            var o_y =( g_y * g_h );
            
            if( (7-1) == te7 ){
            
                //:------------------------------------://
                //: only do for first te7 loop so that ://
                //: we don't erase stuff further down. ://
                //:------------------------------------://
                
                if( sam.clk_g_x === g_x 
                &&  sam.clk_g_y === g_y
                ){
                    ctx.fillStyle = "ORANGE" ;
                }else{
                    ctx.fillStyle = "BLACK"   ;
                };;
                ctx.fillRect(o_x, o_y, g_w, g_h); 
            };;
            
            //:- - - - - - - - - - -- - - - - - - - - - -://
            //: Draw all tiles of given tile size.       ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
            
            dpx = 512 ;   //: Active Level Data Origin X ://
            dpy = 512 ;   //: Active Level Data Origin Y ://
            
            h4x =(           ( r13 % 4 ) );  //:@r13_h4x@://
            h4y =( Math.floor( r13 / 4 ) );  //:@r13_h4y@://
            
            lat = d_hotel13_te7_lat[ te7 ];
            dia = d_hotel13_te7_dia[ te7 ];
            
            dpx += ( 128 * h4x ); //:Now in correct room ://
            dpy += ( 128 * h4y ); //:of data to render   ://
            
            dpx += dia ; //: Now at correct[ te7 ]tile   ://
            dpy += dia ; //: size of data to render.     ://
            
            san = lat ;  //: SPAN_IN_TILES == LATERAL_OS ://
            
        
        for( t_y = 0 ; t_y <=(san-1) ; t_y ++ ){
        for( t_x = 0 ; t_x <=(san-1) ; t_x ++ ){
            
            dtx = dpx + t_x ;
            dty = dpy + t_y ;
            dti = ( dtx + ( dty * 2048 ) ); //:AKA[ p_i ]://    
            c_i =( 4*dti );
            dtu =( 0x0
            | ( d_pix2048[ c_i ] << 24 )
            | ( d_pix2048[ c_i ] << 16 )
            | ( d_pix2048[ c_i ] <<  8 )
            | ( d_pix2048[ c_i ] <<  0 )
            );;
            
            t_v =( dtu >>> 28 ); //:Tile Is 4Bit Number  ://
            t_t =( dtu & 0x0FFFFFFF );
            //:---------:0x12345678----------------------://
            
            clk =(  clk_t_x === t_x 
                 && clk_t_y === t_y );;
                 
            if( sam.clk_g_x != g_x ){ clk =( 0 ); };
            if( sam.clk_g_y != g_y ){ clk =( 0 ); };
            
            if( sam.edi_te7 != te7 ){ clk =( 0 ); };
                 
            if( 0
            ||   ( 1 == t_v ) //: Tile Exists?  ://
            ||   ( !!clk    ) //: Tile Clicked? ://
            ){ 
            
                pog_t_x = ( o_x + ( t_x * t_w ) );
                pog_t_y = ( o_y + ( t_y * t_h ) );
                
                if( !!clk ){
                    ctx.fillStyle = "GREEN"   ;
                }else{
                    ctx.fillStyle = "TAN"   ;
                };;
                
                ctx.fillRect( pog_t_x, pog_t_y, t_w, t_h ); 
 
            };;
            
        };;};;
        };;};;
    };;
    const   F_HOTEL13_DRAW_2D_BOM = function
    PRIVATE_F_HOTEL13_DRAW_2D_BOM(
    
        /** NO ARGS **/
    ){
        console.log("[TODO:DRAW_2D_BOM]");
    };;
    const   F_HOTEL13_DRAW_2D_FAD = function
    PRIVATE_F_HOTEL13_DRAW_2D_FAD(
    
        /** NO ARGS **/
    ){
        console.log("[TODO:DRAW_2D_FAD]");
    };;
    
    const F_HOTEL13_DRAW_2D = function
    PRIVATE_F_HOTEL13_DRAW_2D(
    
        /** No arguments **/
    ){
        let ctx = d_hotel13_sam.hot_con       ;
        let wid = d_hotel13_sam.hot_can.width ;
        let hig = d_hotel13_sam.hot_can.height;
        let tik = d_hotel13_sam.tik_num       ;
        
        if( 0 == tik%2 ){
            ctx.fillStyle = "DARKRED" ;
        }else{
            ctx.fillStyle = "#770000" ;
        };;
        ctx.fillRect(0, 0, wid, hig); //:320*5://
    
        if( d_hotel13_sam.vis_til != 0 ){    //:c_lay_til://
        
            F_HOTEL13_DRAW_2D_TIL();
        };;
        if( d_hotel13_sam.vis_bom != 0 ){    //:c_lay_bom://
            
            F_HOTEL13_DRAW_2D_BOM();
        };;
        if( d_hotel13_sam.vis_fad != 0 ){    //:c_lay_fad://    
        
            F_HOTEL13_DRAW_2D_FAD();
        };;
    };;
    
    const   F_HOTEL13_SAM_TIK = function
    PRIVATE_F_HOTEL13_SAM_TIK(
        /** NO ARGS **/
    ){
        //: ------------------------------------- ://
        //: Only update this number in standalone ://
        //: code. That is why it is here and not  ://
        //: inside of[ F_HOTEL13_TIK ]            ://
        //: ------------------------------------- ://
        d_hotel13_sam.tik_num ++ ;
    
        F_HOTEL13_TIK();
        F_HOTEL13_DRAW_2D();
    };;
    
    const   F_HOTEL13_SAM_TIKLOOP = function
    PRIVATE_F_HOTEL13_SAM_TIKLOOP(
        /**NOARGS**/
    ){
        //:Core Logic , Decoupled from ://
        //:ugly looper function.       ://
        F_HOTEL13_SAM_TIK();
    
        //:Call yourself again://
        var one_2nd =( 1000 /**MS in Second**/ );
        window.setTimeout(
            F_HOTEL13_SAM_TIKLOOP
        ,   one_2nd / d_hotel13_sam.tik_fps
        );;
    };;
        
    const F_HOTEL13_SAM_RUN = function
    PRIVATE_F_HOTEL13_SAM_RUN(
        /** No Args **/
    ){
        //:----------------------------------------------://
        //: Only when .js file is running as stand alone ://   
        //: program. When part of[ server.js ]we use     ://
        //: the WEBGL setup to render our data.          ://
        //:----------------------------------------------://
        if( d_hotel13_yes_aim ){ ERR("[StandAloneOnly]"); };    
        if(!d_hotel13_not_aim ){ ERR("[SAMVARSPROBLEM]"); };
    
        F_HOTEL13_SAM_TIKLOOP(); //:LoopForever://
    };;
    
    const   F_HOTEL13_SAM_MOU_CLK = function
    PRIVATE_F_HOTEL13_SAM_MOU_CLK(
        evt_clk
    ){
        let sam = d_hotel13_sam ;
        
        var can_wid = sam.hot_can.width  ;
        var can_hig = sam.hot_can.height ;
        
        var g_w =( can_wid / 5 ); //: GridCellWidth  ://
        var g_h =( can_hig / 5 ); //: GridCellHeight ://
        
        sam.clk_p_x = evt_clk.offsetX ;
        sam.clk_p_y = evt_clk.offsetY ;
        
        sam.clk_g_x =Math.floor( sam.clk_p_x / g_w );
        sam.clk_g_y =Math.floor( sam.clk_p_y / g_h );
        
        //:Collect all click positions for all tile  ://
        //:sizes. For now, don't worry that this     ://
        //:might show up in ALL ROOMS when rendering.://
        //:[INTENTIONAL_BUG][BUG][HACK]              ://
        for( var te7 = 0 ; te7 <=(7-1) ; te7++ ){
        
            //: Lateral Offset Is Also Level Span    ://
            //: Measured In Tiles Of te7 size.       ://
            
            var lat = d_hotel13_te7_lat[ te7 ];
            var t_w = ( g_w / lat );
            var t_h = ( g_h / lat );
            
            let FLO = Math.floor ;
            
            var t_x = FLO( sam.clk_p_x / t_w );
            var t_y = FLO( sam.clk_p_y / t_h );
            
            t_x = ( t_x % lat );
            t_y = ( t_y % lat );
            
            sam.te7_clk_t_x[ te7 ]= t_x ;
            sam.te7_clk_t_y[ te7 ]= t_y ;
        };;
        
        console.log( "[evt_clk]:" , evt_clk );
    };;
    const   F_HOTEL13_SAM_MOU_MOV = function
    PRIVATE_F_HOTEL13_SAM_MOU_MOV(
        evt_mov
    ){
        console.log( "[evt_mov]:" , evt_mov );
    };;
    
    //:HOTEL13_STAND_ALONE_SETUP:========================://
    //:                                                  ://
    //:  If not integrated into main server.js for       ://
    //:  our[ Atomic Ivy MMO ]( AIM )Then let's create   ://
    //:  the cellular bomb-o-mata (bombomata) game       ://
    //:  to make sure all of the mechanics work          ://
    //:  properly.                                       ://
    //:                                                  ://
    //:- - - - - - - - - - - - -- - - - - - - - - - - - -://
    
    console.log( "[YES_AIM]:" , d_hotel13_yes_aim );
    console.log( "[NOT_AIM]:" , d_hotel13_not_aim );
    
    if( d_hotel13_yes_aim ){
    
        console.log("[part_of_something_larger]");
    }else
    if( d_hotel13_not_aim ){
    
        console.log("[cellcularbombomata]");
        
        var sam = d_hotel13_sam ;
    
        const dom_roo = document.documentElement; 
        var   dom_bod = document.body           ; 
        if( (!dom_bod) ){
            dom_bod = document.createElement( "body" );
            document.body = dom_bod ;
        };;
        sam.hot_can = document.createElement( "canvas" );
        sam.hot_can.width =( 1600 );
        sam.hot_can.height=( 1600 );
        ASS( 1600 == c_fiverez );
        dom_bod.appendChild( sam.hot_can );
    
        sam.hot_con = sam.hot_can.getContext( "2d" );
        
        //:add_mouse_handler:----------------------------://
        {
            let sexycanvasfuntimes = sam.hot_can ;
            
            sexycanvasfuntimes.addEventListener(
            
                "mousemove"   //:EventType://
            ,   F_HOTEL13_SAM_MOU_MOV 
            );;
            sexycanvasfuntimes.addEventListener(
            
                "click"   //:EventType://
            ,   F_HOTEL13_SAM_MOU_CLK 
            );;
        }
        //:----------------------------:add_mouse_handler://
    
        F_HOTEL13_SAM_RUN();
    
    }else{
        ERR("[unexpectedcase:2022_07_05]");
    };;
    //:========================:HOTEL13_STAND_ALONE_SETUP://

/** ******************************************************** ***

              [ ]
           [ ][ ][ ]
        [ ][ ][ ][ ][ ]
           [ ][ ][ ]
              [ ]
              
              
        Physical Layout Of [ h_x ]&[ h_y ] totally 
        different that it's layout in the data...
        You need to keep this in mind for mapping
        bomb explosions into adjacent rooms.
        
                  +---+                       +---+
                  |000|                       |r00|
                  +---+                       +---+
             +---++---++---+             +---++---++---+
             |001||002||003|             |r01||r03||r03|
             +---++---++---+             +---++---++---+
        +---++---++---++---++---+   +---++---++---++---++---+
        |004||005||006||007||008|   |r04||r05||r06||r07||r08|
        +---++---++---++---++---+   +---++---++---++---++---+
             +---++---++---+             +---++---++---+
             |009||010||011|             |r09||r10||r11|
             +---++---++---+             +---++---++---+
                  +---+                       +---+
                  |012|                       |r12|
                  +---+                       +---+
              
        //: Adjactent( render-wise )Rooms ://
        var d_hotel13_adj =[
        //: SLF, L,R,T,B  ,  (LEF),(RIG),(TOP),(BOT)
            r00, 0,0,0,1  ,  (0-1),(0-1),(0-1),(r03)  
        ,   
        ];;
        
        //: Kitty Corner Rooms( render-wise )://
        var d_hotel13_kit =[
        
        //: T_L , T_R , B_L , B_R
        
        ];;
    
              

    |<--------------0512-------------->|
    |<-----0256----->||<-----0256----->|
    +--128--++--128--++--128--++--128--+
    |i_h_x=0||       ||       ||       |
    |  000  ||  001  ||  002  ||  003  | 
    |i_h_y=0||       ||       ||       |
    +-------++-------++-------++-------+
    +--128--++--128--++--128--++--128--+
    |       ||       ||       ||       |
    |  004  ||  005  ||  006  ||  007  |
    |       ||       ||       ||       |
    +-------++-------++-------++-------+
    +--128--++--128--++--128--++--128--+
    |       ||       ||       ||       |
    |  008  ||  009  ||  010  ||  011  |
    |       ||       ||       ||       |
    +-------++-------++-------++-------+
    +--128--++--128--++--128--++--128--+
    |       ||       ||       ||       |
    |  012  || [ANY] || [ANY] || [ANY] |
    |       ||       ||       ||       |
    +-------++-------++-------++-------+
    
    
    #_AIM_MASTER_MEMORY_LAYOUT_#
    
        |<--------------2048-------------->|
        |<-----1024----->||<-----1024----->|
        +--512--++--512--++--512--++--512--+
        |  mm0  ||  mm1  ||  mm2  ||  mm3  |
        |#DTUFP#||  CIB  ||#DTUFP#||#DTUFP#|
        |       ||cib_top||       ||       |
        +-------++-------++-------++-------+
        +--128--++--128--++--128--++--128--+
        |  mm4  ||  mm5  ||  mm6  ||  mm7  |
        |  CIB  ||  CIB  ||  CIB  ||#DTUFP#|
        |cib_lef||cib_cen||cib_rig||       |
        +-------++-------++-------++-------+
        +--128--++--128--++--128--++--128--+
        |  mm8  ||  mm9  ||  mma  ||  mmb  |
        |#DTUFP#||  CIB  ||#DTUFP#||#DTUFP#|
        |       ||cib_bot||       ||       |
        +-------++-------++-------++-------+
        +--128--++--128--++--128--++--128--+
        |  mmc  ||  mmd  ||  mme  ||  mmf  |
        |#DTUFP#||#DTUFP#||#DTUFP#||#DTUFP#|
        |       ||       ||       ||       |
        +-------++-------++-------++-------+
        
        @mm0@ : Master Memory Cell Index  0
        @mm1@ : Master Memory Cell Index  1
        @mm2@ : Master Memory Cell Index  2
        @mm3@ : Master Memory Cell Index  3
        @mm4@ : Master Memory Cell Index  4
        @mm5@ : Master Memory Cell Index  5
        @mm6@ : Master Memory Cell Index  6
        @mm7@ : Master Memory Cell Index  7
        @mm8@ : Master Memory Cell Index  8
        @mm9@ : Master Memory Cell Index  9
        @mma@ : Master Memory Cell Index 10
        @mmb@ : Master Memory Cell Index 11
        @mmc@ : Master Memory Cell Index 12
        @mmd@ : Master Memory Cell Index 13
        @mme@ : Master Memory Cell Index 14
        @mmf@ : Master Memory Cell Index 15
    
    
*** ******************************************************** **/
/** HASHTAG_NOTES ****************************************** ***

    #PUT_ANY# :
    
        F_HOTEL13_PUT_ANY( //:#PUT_ANY#://
    
            i_pix //: RGBA  U08 Pixel Array ://
        ,   i_san //: Span in pixels ://
        
        ,   i_c_x //: City Block X [ 0|1|2 ] AKA HOTEL ://
        ,   i_c_y //: City Block Y [ 0|1|2 ] AKA HOTEL ://
        
        ,   i_h_x //: Hotel Room X
        ,   i_h_y //: Hotel Room Y
        
        ,   i_la3 //: Layer that determines WHAT we are putting.
                  //: 0 == tiles
                  //: 1 == bombs
                  //: 2 == flames
        
        ,   i_te7 //: tile size exponent , 7 of them 0to6
        ,   i_t_x //: tile x
        ,   i_t_y //: tile y
        
        ,   i_u32 //: tile value is a full Uint32 value.
                  //: NOT slicing up bits into layers because
                  //: flames need to be TICKER TIMESTAMPS so
                  //: webgl shader knows what animation frame
                  //: they are on.
        ){ ... }

    #PUT_TIL# :
        Tiles rendered UNDER bombs & flames , so draw first. 
        
    @EXPALAY@ : tile size EXPonent And LAYer (That Order)
    @LOCA@    : LOCAtion (location data)
    @DATA@    : Some type of raw memory acted upon.
    @FODA@    : USE[ FADA ]( FADA == Flames Are DAmage )
    @FADA@    :
              : Flames Are DAmage , they are the same thing.
              : Flame timestamps tell you how to animate 
              : flames, but also tell you that the area has
              : been damaged.
              : 0x0 0000000 : No Damage
              : 0xF FFFFFFF : Inifinte Damage Type F
              : 0x0 FFFFFFF : Inifinte Damage Type 0
              : 0xFFFFFFF <-- 7 Nybles == 268,435,455
              : Timestamp would have to exist for 51 days
              : straight before serious problems.
              
    @F_001 : Means "Function 001" named so just to keep
           : name small to save column space. Try __NOT__
           : to do this unless everything lining up in
           : compact space is very important.
          
    #_EXPAND_AFTER_1ST_PLAYABLE_# :
    
        Code that would be a good idea, but do not
        write it until after we have a playbe game that
        other's can play. We are getting too far ahead
        of ourselves. Things might change by the time
        you get here, or you might never use the code.
        Or the code might not be written exactly as
        you need it.
        
    [the_only_argument_is_an_object]:
    
        Let's be bold in our design decisions. Either
        a function is very procedural and takes many
        arguments, or it takes one giant object.
        
        Try not to mix-match this, because there are
        just too many combinations you could do. Adds
        extra thinking about WHAT TO DO and extra
        thinking about WHAT DID I DO ?
        
        And after all that work , your design decision
        might not be optimal for your final use case ,
        or you may have multiple use cases, some where
        the signature is __NOT__ optimal.
        
        DATE[ 2022_07_04 ]921 AM
        
    #DTUFP# : DONT_TOUCH_UNTIL_FIRST_PLAYABLE
            : D____T_____U_____F_____P_______
            
            Yeah, it is a lot of "wasted" memory, but
            don't touch it until after we have a 
            playable game. Messing with this memory
            before we have a playable game:
            
            1. Adds more time till 1st playable.
            2. Digs us into more potential technical debt.
            
    @CIB@ : CITYBLOCK ( which hotel are you in ? )
    
    @cib_lef@ : CityBlock : LEFT
    @cib_rig@ : CItyBlock : RIGHT
    @cib_top@ : CityBLock : TOP
    @cib_bot@ : CityBLock : BOTTOM
    @cib_cen@ : CityBlock : CENTER
    
    #_UN_NAMESPACED_GLOBALS_# :
    
        Really we should namespace everything, but the
        problem with that is everything get's really
        fucking large. It expands the length of our
        lines and makes diagrams harder.
        
        If we make something an un-namespaced global,
        it means we can no longer use it anywhere else
        in the code base.
            
    #F_HOTEL13_DI8_DI1# :
    
        Converts 8 dimensional value ( DI8 ) for data
        location into a 1-dimensional value ( DI1 ).
        
        In this case, the 1D value is the pixel index
        of where to put the data.
        
    @d1_d2_d3_d4_d5_d6_d7_d8@ :
    
        Denoting 8 dimensions of some type of input.
        As of writing this, a HOTEL13 system location
        for where to put a [ TILE | BOMB | FADA ]
        
    @TILE@ : A tile in the sense of tile based 2D game.
    @BOMB@ : A bomb tile.
    @FADA@ : Flames_Are_DAmage tile.
    @FIDA@ : You mean "Flames Are Damage" not "FireIsDamage"
    
    @quarkmap@ : A mip-map like partitioning of pixels used
               : to encode data. DONT REMEMBER how I originally
               : used this term in ATOMIC ALICE 2020 & A3 ,
               : but "quarkmap" here i s a generalization
               : for how  I am partitioning pixels into data.

    #_BIG_BOMBS_DESIGN_DECISON_# :
    
        Let's focus on gameplay... I like the idea of
        bombs being able to be different power of 2 sizes.
        
        Yes, they have to be snapped to certain locations
        and can't be put anywhere... But the idea of a
        HUGE bomb that can blow up an entire room
        sounds pretty fun.
        
    #_CITYCENTER_# :
    
        AKA[ mm5 / cib_cen ]
        
    #_RECURSION_TO_SOLVE_OUT_OF_ROOM_PROBLEM_# :
    
        Use recursion to truncate explosions and re-emit
        them into adjacent rooms. That is how we will 
        make sure to have the explosions leak into
        adjacent rooms properly.
        
    @cen_of_exp_pix@ : Center of explosion pixel.
    
    #_WHY_COE_START_AT_512_# :
    
        "COE" variable starts at [512,512] because only
        slot[ mm5 ]in master memory is to be updated
        as part of game simulation. Simulation does
        not run for adjacent level packs ( hotels ).
    
    #_EMI_IF_ADJ_# : EMIt IF valid ADJacent room exists.
    
    #SELFSUB# : WRONG , YOU MEAN[ #SUBSELF# ]
              : That sounds kinda like "self suck".
    
    #SUBSELF# : Explosion Size Might Look "off-by-1"
              : But rembember , if you have a 
              : 10 long explosion leaking 5 cells OOB,
              : you __DONT__ emit a 5 in adjacent room.
              : You emit a 4 with an explosion origin
              : at the adjacency.
              [B]: Bomb Origin.
              [E]: Emitted Origin
              |<-------------- 11 -------------->|
              [B][1][2][3][4][5]  [6][7][8][9][10]
              [ ][ ][ ][ ][ ][ ]  [E][1][2][3][ 4]
              |<---- ROOM ---->|  |<--ADJACENT-->|
              
    #ETRUNK# : Explosion Truncation.
    
    #_BLP_# : Backup Loop Prep , setting value to invalid
            : value so that the first time the value is
            : used after being incremented it is the
            : first VALID value.
            
    @P_I_A_I@ : Programmer_Is_An_Idiot
              : The error is not bad data.
              : The error is not IO/device error.
              : The error is not caused by user input.
              : The error is a bug that is programmer's fault.
              
    @PII@ : Programmer Is Idiot  (synonym:P_I_A_I)
    @PIS@ : Programmer Is Stupid (synonym:P_I_A_I)
    
    @SLF@ : SELF reference.
    
    #NOMORE_TILL_1STPLAY# :
        
        There are more slots for bomb types. But don't
        make up any more types of bombs until AFTER
        you have a 1st playable.
        
    #_why_bt0_bad_# :
    
        bt0 cannot be a valid bomb type because we need
        a completely blank uint32 ( 0x00000000 ) to mean
        that "no damage / flames have ever been here"
        
    #_why_btf_bad_# :
    
        btf cannot be a valid bomb type because we need
        a way to design levels where the geometry is
        already damaged at start of [game/level/room].
        
        We will do this by making the highest u32 value
        ( 0xFFFFFFFF ) mean "damaged from beginning of time"
        
    #_FEATURE_CREEP_ALLOW_AFTER_1ST_PLAYABLE_# :
    
        I like these ideas , but don't code support
        for them until after we have a 1st playable.
        
        We might change our mind for what game
        mechanic should be added.
        
    #_why_fd0_bad_# : Zero needs to be reserved for
                    : "untouched by flames"
                    
    #_why_fdf_bad_# : 0xF needs to be reserved for
                    : "always damaged since beginning"
                    : "of time/game"
                    
    ADJ_ROOM_EXISTS : Adjacent Room Exists
    KIT_ROOM_EXISTS : Kitty Corner Room Exists
    
    @lat@ : Means LATERAL  in HOTEL13 system.
    @dia@ : Means DIAGONAL in HOTEL13 system.
    
    @deton_x@   : REFACTORED_TO[ dog_x ]
    @deton_y@   : REFACTORED_TO[ dog_y ]
    @explo_lef@ : REFACTORED_TO[ lef_t ]
    @explo_rig@ : REFACTORED_TO[ rig_t ]
    @explo_top@ : REFACTORED_TO[ top_t ]
    @explo_bot@ : REFACTORED_TO[ bot_t ]
    
    @dog_x@ : Detonation OriGin . X
    @dog_y@ : Detonation OriGin . Y
    
    @lef_t@ : explosion Tendrill length ) LEFT
    @rig_t@ : explosion Tendrill length ) RIGHT
    @top_t@ : explosion Tendrill length ) TOP
    @bot_t@ : explosion Tendrill length ) BOTTOM
    
    #LATOS# : Lateral  Offset Formula For Quarkmap Structure
    #DIAGOS#: Diagonal Offset Formula For Quarkmap Structure
    #DIAGO# : #DIAGOS# without the S so same len as #LATOS#
    
    @tik_sec@ : You want[ tik_fps ]
    
    @tik_bom@ : Timestamp encoded into BOMB value.
    @tik_fad@ : Timestamp encoded into FADA value.(Flame/Damage)
    @tik_til@ : Timestamp encoded into TILE value.(MightNotNeed)
    
    #tik_til# : -------------------------------------------:
    :                                                      :
    :   We might not need to encode time values into tile  :
    :   values. It would probably be better if we DIDNT    :
    :   because then we will only get to have...           :
    :                                                      :
    :       TIMESTAMP                     TIMESTAMP        :
    :       RERSERVED                     RERSERVED        :
    :       NYBLE VAL                     NYBLE VAL        :
    :       V                             V                :
    :       0 1 2 3 4 5 6 7 8 9 A B C D E F                :
    :         | | | | | | | | | | | | | |                  :
    :         1 2 3 4 5 6 7 8 9 10  12  14 <--FOURTEEN(14) :
    :                             11  13                   :
    :                                                      :
    :   We will only get to have 14 tile values because    :
    :   the rest will be used to encoding tilestamp.       :
    :                                                      :
    :   How would that even work with auto tiling?         :
    :                                                      :
    :   Only 14 tile types would help limit me from        :
    :   over-designing...                                  :
    :                                                      :
    :   0xF00000000 <-- Diagram is looking at the bits     :
    :                   of the last nyble. Wait...         :
    :                                                      :
    :                   That is 4 bits.. not 8...          :
    :                                                      :
    :                   1111 === 15 in decimal.            :
    :                                                      :
    :                   No, that's correct.                :
    :------------------------------------------------------:
    
    REFACTOR : [ rid ] ==>[ r13 ] ( 13 rooms in hotel )
    REFACTOR : [ gid ] ==>[ g25 ] ( 25 grid slots in  )
                                  ( which room may or )
                                  ( may-not exist     )
                                  
    @rgw@ : RoomGrid WIDTH  (of one room cell) JUST_USE[ g_w ]   
    @rgh@ : RoomGrid HEIGHT (of one room cell) JUST_USE[ g_h ]
    
    @rid@ : Room ID , use r13 because 13 of them.
    @gid@ : Grid ID , use g25 because 25 of them.
    
    @r13@ : Room ID , 13 of them 0-to-12 so call r13
    @g25@ : Grid ID , 25 of them 0-to-24 so call g25
    
    @dpx@ : Data_Pixel_X : Encodes [Tile|Bomb|Fada]
    @dpy@ : Data_Pixel_Y : Encodes [Tile|Bomb|Fada
    
    @h_x@ : USE[ h4x ]HotelRoomX ( in terms of raw data layout )
    @h_y@ : USE[ h4y ]HotelRoomY ( in terms of raw data layout )
    
    @h4x@ : Hotel(room)X : In terms of DATA layout , not VIEW.
    @h4y@ : Hotel(room)Y : In terms of DATA layout , not VIEW.
    
    @r13_h4x@ : r13 ==to==> h4x
    @r13_h4y@ : r13 ==to==> h4y
    
    @DATA_EQ_VIEW@ : Data Equals View , how the data is
                   : packed is equal to how the data is
                   : rendered. This is not always the case.
                   :
                   : Your mental conception of the physical
                   : layout of the data should be the same
                   : for this variable for both imagining
                   : the FINAL RENDER and imagining how the
                   : datapoint is fetched from PIX2048.
                   
    [LATERAL_OS]    : Lateral offset to data we want.
    [SPAN_IN_TILES] : The tilemap [ WIDTH == HEIGHT ]
                    : I use[ san ]when width is always
                    : equal to height. Because it makes
                    : [ wid ]and[ hig ]variables
                    : redundant.
                    
    @dog@     : Detonation Origin
    @pog@     : Pixel_Origin
    @pog_t_x@ : Pixel_OriGin : Tile_X
    @pog_t_y@ : Pixel_OriGin : Tile_Y
    
    #CHECKER_MODULO_SNIP# :  if( (t_x%2)==(t_y%2) ){ ... };;
    
*** ******************************************************** **/
/** DEVELOPER_TODO_NOTE ************************************ ***



    #_MAKE_EXPLOSIVE_AUTOMATA_ON_E_Z_2D_CANVAS_# 
    
        Bomb system is basically just over-glorified
        cellular atomata. Get this file to run standalone
        using a simple CANVAS 2D context to render
        enough info to help you debug behavior.
        
        Should be able to pause+play simulation
        and SET BOMBS while simulation is paused.
        
        ----------------------------------------------------
        
        TODO: Explosive Atomata
        
            We randomly generate TILES & BOMBS
            on the map and have fire blasts running
            around the boarder of the 13 rooms diamond.
            
            Once a trail of bombs hits the edge,
            detonation is inevitable once the rolling
            fire makes its way to the boarder.
            
            We use this to TEST if all of our logic
            is working before we move the code
            into main game.
            
*** ************************************ DEVELOPER_TODO_NOTE **/
